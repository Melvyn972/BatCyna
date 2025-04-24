"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import config from "@/config";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // For email-based auth with NextAuth, registration is the same as sign-in
      // It will create a new user if one doesn't exist with that email
      const result = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: config.auth.callbackUrl,
      });

      if (result?.error) {
        setMessage("Something went wrong. Please try again.");
      } else {
        setMessage("Check your email for the login link!");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: config.auth.callbackUrl });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
          
          <button 
            onClick={handleGoogleSignIn}
            className="btn btn-outline mb-4 w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
            </svg>
            Sign up with Google
          </button>

          <div className="divider">OR</div>

          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            {message && (
              <div className={`mt-4 text-sm ${message.includes('Check') ? 'text-success' : 'text-error'}`}>
                {message}
              </div>
            )}
            
            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-gradient ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? "Sending link..." : "Create Account"}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 