"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const token = searchParams.get("token");
    
    if (!token) {
      setStatus("error");
      return;
    }

    // The page will automatically redirect if the token is valid
    // This is just a fallback in case something goes wrong
    const timeout = setTimeout(() => {
      setStatus("timeout");
    }, 10000);

    return () => clearTimeout(timeout);
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body text-center">
          <h1 className="text-2xl font-bold mb-6">Verifying your email</h1>
          
          {status === "verifying" && (
            <>
              <div className="flex justify-center mb-4">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
              <p>Please wait while we verify your email...</p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="text-error mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p>Invalid verification link. Please try signing in again.</p>
            </>
          )}

          {status === "timeout" && (
            <>
              <div className="text-warning mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p>The verification is taking longer than expected. If you're not redirected automatically, please try signing in again.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 