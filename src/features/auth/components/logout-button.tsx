"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() =>
        authClient.signOut().then(() => {
          router.push("/login");
          toast.success("Logged out successfully");
        })
      }
      type="button"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
