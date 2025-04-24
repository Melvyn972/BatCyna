import Link from "next/link";
import config from "@/config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: `Authentication - ${config.appName}`,
  description: `Login or create an account for ${config.appName}`,
};

export default async function AuthLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-base-100">
      <main>{children}</main>
    </div>
  );
} 