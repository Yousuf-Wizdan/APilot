import SignInPage from "@/components/auth/SignInPage";
import { redirectAuth } from "@/modules/authentication/actions";

export default async function SignIn() {
  await redirectAuth();

  return <SignInPage />;
}
