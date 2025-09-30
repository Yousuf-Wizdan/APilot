import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-b from-green-900 via-green-800 to-green-900 p-16">
        <div className="relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-6xl font-bold mb-4 text-green-400 tracking-tight">
            APilot
          </h1>
          <p className="text-green-200/70 text-lg leading-relaxed max-w-md font-light">
            Navigate the future of AI-powered development with precision and sustainable innovation.
          </p>
        </div>

        {/* Subtle decorative green accents */}
        <div className="absolute top-10 left-10 w-28 h-28 border border-green-500 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-16 w-32 h-32 border border-green-400 rounded-full opacity-20 animate-spin-slow" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        <div className="relative w-full max-w-md">
          {/* Form container */}
          <div className="relative bg-green-950/90 backdrop-blur-md rounded-2xl border border-green-700 p-10 shadow-xl shadow-black/50">
            <div className="relative z-10">{children}</div>
          </div>

          {/* Background glow accents */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-green-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-8 right-0 w-32 h-32 bg-green-500/15 rounded-full blur-2xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
