import { Zap, Shield, Leaf, Rocket } from "lucide-react";
import React from "react";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950/50 to-slate-900">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/3 -right-40 w-96 h-96 bg-green-400/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Left Side - Enhanced Artistic Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-green-900/40 to-emerald-800/50" />

        {/* Floating geometric elements */}
        <div className="absolute inset-0">
          {/* Large floating circles */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 border border-emerald-400/20 rounded-full animate-spin-slow">
            <div className="absolute inset-8 border border-emerald-300/30 rounded-full animate-reverse-spin" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 border border-green-400/25 rounded-full animate-float">
            <div className="absolute inset-6 bg-emerald-500/5 rounded-full animate-pulse" />
          </div>

          {/* Hexagonal pattern */}
          <div
            className="absolute top-1/2 right-1/3 w-40 h-40 border border-emerald-400/15 transform rotate-12 animate-bounce-slow"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />

          {/* Glowing dots */}
          <div className="absolute top-20 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
          <div
            className="absolute bottom-32 left-32 w-2 h-2 bg-green-300 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-20 w-4 h-4 bg-emerald-500 rounded-full animate-ping"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(emerald 1px, transparent 1px), linear-gradient(90deg, emerald 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16 w-full">
          {/* Brand heading */}
          <div className="mb-16 animate-fade-in">
            <h1 className="text-6xl xl:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-400 bg-clip-text text-transparent">
              APilot
            </h1>
            <p className="text-lg xl:text-xl text-emerald-100/80 leading-relaxed max-w-lg font-light">
              Navigate the future of AI-powered development with precision and
              sustainable innovation
            </p>
          </div>

          {/* Feature cards */}
          <div
            className="grid grid-cols-2 gap-6 xl:gap-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="group relative p-6 xl:p-8 rounded-2xl bg-emerald-900/30 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-700 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:bg-emerald-800/40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col items-start space-y-4">
                <div className="p-3 xl:p-4 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-400/30 transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-6 w-6 xl:h-7 xl:w-7 text-emerald-300" />
                </div>
                <h3 className="font-bold text-lg xl:text-xl text-emerald-100">
                  Lightning Fast
                </h3>
                <p className="text-emerald-200/70 text-sm leading-relaxed">
                  Deploy AI solutions in minutes with our streamlined platform
                </p>
              </div>
            </div>

            <div className="group relative p-6 xl:p-8 rounded-2xl bg-emerald-900/30 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-700 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:bg-emerald-800/40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col items-start space-y-4">
                <div className="p-3 xl:p-4 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-400/30 transition-all duration-300 group-hover:scale-110">
                  <Shield className="h-6 w-6 xl:h-7 xl:w-7 text-emerald-300" />
                </div>
                <h3 className="font-bold text-lg xl:text-xl text-emerald-100">
                  Enterprise Security
                </h3>
                <p className="text-emerald-200/70 text-sm leading-relaxed">
                  Bank-grade encryption with zero-trust architecture
                </p>
              </div>
            </div>

            <div className="group relative p-6 xl:p-8 rounded-2xl bg-emerald-900/30 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-700 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:bg-emerald-800/40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col items-start space-y-4">
                <div className="p-3 xl:p-4 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-400/30 transition-all duration-300 group-hover:scale-110">
                  <Leaf className="h-6 w-6 xl:h-7 xl:w-7 text-emerald-300" />
                </div>
                <h3 className="font-bold text-lg xl:text-xl text-emerald-100">
                  Sustainable AI
                </h3>
                <p className="text-emerald-200/70 text-sm leading-relaxed">
                  Eco-friendly computing with carbon-neutral operations
                </p>
              </div>
            </div>

            <div className="group relative p-6 xl:p-8 rounded-2xl bg-emerald-900/30 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-700 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:bg-emerald-800/40">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col items-start space-y-4">
                <div className="p-3 xl:p-4 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-400/30 transition-all duration-300 group-hover:scale-110">
                  <Rocket className="h-6 w-6 xl:h-7 xl:w-7 text-emerald-300" />
                </div>
                <h3 className="font-bold text-lg xl:text-xl text-emerald-100">
                  Infinite Scale
                </h3>
                <p className="text-emerald-200/70 text-sm leading-relaxed">
                  Grows exponentially with your ambitious vision
                </p>
              </div>
            </div>
          </div>

          {/* Additional floating decorative elements */}
          <div className="absolute bottom-10 left-10 w-6 h-6 border border-emerald-400/30 rotate-45 animate-spin-slow" />
          <div className="absolute top-16 right-16 w-4 h-4 bg-emerald-400/20 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-8 relative overflow-hidden">
        {/* Enhanced gradient overlay for right side */}
        <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/60 via-green-950/40 to-emerald-900/30" />

        {/* Floating elements on right side */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 border border-emerald-400/10 rounded-full animate-spin-slow" />
          <div className="absolute bottom-20 left-10 w-24 h-24 border border-green-400/15 rounded-full animate-float" />
          <div className="absolute top-1/2 right-20 w-3 h-3 bg-emerald-400/60 rounded-full animate-ping" />
        </div>

        <div
          className="w-full max-w-md relative z-10 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Form container with enhanced styling */}
          <div className="relative backdrop-blur-sm bg-slate-900/40 border border-emerald-500/20 rounded-3xl p-8 shadow-2xl shadow-emerald-900/20">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-green-600/5" />

            <div className="relative">{children}</div>
          </div>

          {/* Terms and privacy policy */}
          <p className="text-center text-sm text-emerald-200/60 mt-8 font-light leading-relaxed px-4">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 underline-offset-4 hover:underline font-medium"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-emerald-300 hover:text-emerald-200 transition-colors duration-200 underline-offset-4 hover:underline font-medium"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
