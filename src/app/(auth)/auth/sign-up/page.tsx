import SignUpPage from "@/components/auth/SignUpPage";
import { redirectAuth } from "@/modules/authentication/actions";

export default async function SignUp() {
  await redirectAuth();

  return <SignUpPage />;
}