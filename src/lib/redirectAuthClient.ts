import { authClient } from "./authClient";
import { useRouter } from "next/navigation";

export const redirectAuthClient = async () => {
  const session = await authClient.getSession();
  const router = useRouter();

  if (session?.data?.user?.id) {
    router.push("/home");
  }
};
