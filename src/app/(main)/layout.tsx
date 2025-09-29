import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  //Redirect to sign-in if no session
  if (!session) {
    redirect("/auth/sign-in");
  }

  return <>{children}</>;
};

export default RootLayout;
