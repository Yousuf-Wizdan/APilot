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

      {/* Auth Form */}
      <div className="w-full">
        <AuthView path={path} />
      </div>
    </div>
  );
}
