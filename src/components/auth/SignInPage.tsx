"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn } from "@/lib/authClient";
import { cn } from "@/lib/utils";

const SignInPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-200 to-green-300 bg-clip-text text-transparent">
          Welcome Back
        </h1>
        <p className="text-emerald-200/70 text-sm leading-relaxed">
          Sign in to continue your AI development journey
        </p>
      </div>

      {/* Sign-in Button */}
      <div className="space-y-4">
        <Button
          variant="outline"
          size="lg"
          className={cn(
            "w-full gap-3 h-12 text-base font-medium",
            "bg-white/10 backdrop-blur-sm border-emerald-400/30 text-emerald-100",
            "hover:bg-white/20 hover:border-emerald-300/50 hover:text-white",
            "transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          )}
          disabled={loading}
          onClick={async () => {
            await signIn.social(
              {
                provider: "google",
                callbackURL: "/home",
              },
              {
                onRequest: () => {
                  setLoading(true);
                },
                onResponse: () => {
                  setLoading(false);
                },
              },
            );
          }}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-emerald-300 border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              />
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              />
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
              />
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              />
            </svg>
          )}
          {loading ? "Signing in..." : "Continue with Google"}
        </Button>

        {/* Alternative divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-emerald-400/20" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-slate-900/80 px-4 text-emerald-300/60 font-light">
              Secure authentication powered by Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
