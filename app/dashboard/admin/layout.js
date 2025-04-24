import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import prisma from "@/libs/prisma";
import Link from "next/link";

// This layout ensures only users with admin role can access the admin dashboard
export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/auth/login");
  }
  
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  // If user is not an admin, redirect to the dashboard
  if (user?.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Admin Dashboard</div>
          <Link href="/dashboard" className="hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto p-6">
        {children}
      </div>
    </div>
  );
} 