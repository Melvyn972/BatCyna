import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import prisma from "@/libs/prisma";

// Get current consent settings
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Non autorisé. Veuillez vous connecter." },
        { status: 401 }
      );
    }
    
    // Get user from database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        consentMarketing: true,
        consentAnalytics: true,
        consentThirdParty: true,
      },
    });
    
    if (!user) {
      return NextResponse.json(
        { error: "Utilisateur non trouvé." },
        { status: 404 }
      );
    }
    
    // Format consent data
    const consent = {
      marketing: user.consentMarketing,
      analytics: user.consentAnalytics,
      thirdParty: user.consentThirdParty,
    };
    
    // Return consent data
    return NextResponse.json({ consent }, { status: 200 });
    
  } catch (error) {
    console.error("Error retrieving consent settings:", error);
    
    return NextResponse.json(
      { error: "Une erreur s'est produite lors de la récupération des préférences de consentement." },
      { status: 500 }
    );
  }
}

// Update consent settings
export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);
    
    // Check if user is authenticated
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Non autorisé. Veuillez vous connecter." },
        { status: 401 }
      );
    }
    
    // Parse request body
    const { consent } = await request.json();
    
    // Update user consent in database
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        consentMarketing: consent.marketing,
        consentAnalytics: consent.analytics,
        consentThirdParty: consent.thirdParty,
      },
    });
    
    // Return success response
    return NextResponse.json(
      { 
        message: "Préférences de consentement mises à jour avec succès",
        consent,
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Error updating consent settings:", error);
    
    return NextResponse.json(
      { error: "Une erreur s'est produite lors de la mise à jour des préférences de consentement." },
      { status: 500 }
    );
  }
} 