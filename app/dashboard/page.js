import ButtonAccount from "@/components/ButtonAccount";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import prisma from "@/libs/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <ButtonAccount />
        <h1 className="text-3xl md:text-4xl font-extrabold">Private Page</h1>
        
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">User Information</h2>
          <p className="text-gray-700">
            <span className="font-medium">Role:</span> {user.role}
          </p>
        </div>

        {user.role === "ADMIN" && (
          <div className="mt-6">
            <Link 
              href="/dashboard/admin" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Admin Dashboard
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
