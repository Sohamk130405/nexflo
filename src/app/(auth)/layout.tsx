import AuthLayout from "@/features/auth/components/auth-layout";
import { requireUnAuth } from "@/lib/auth-utils";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  await requireUnAuth();
  return <AuthLayout>{children}</AuthLayout>;
}
