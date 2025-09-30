import { redirectAuth } from "@/modules/authentication/actions";
import { AuthView } from "@daveyplate/better-auth-ui";
import { authViewPaths } from "@daveyplate/better-auth-ui/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(authViewPaths).map((path) => ({ path }));
}

export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  if (path !== "sign-out") {
    await redirectAuth();
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-200 to-green-300 bg-clip-text text-transparent">
          Get Started
        </h1>
        <p className="text-emerald-200/70 text-sm leading-relaxed">
          Join the future of AI-powered development
        </p>
      </div>

      {/* Auth Form */}
      <div className="w-full">
        <AuthView path={path} />
      </div>
    </div>
  );
}
