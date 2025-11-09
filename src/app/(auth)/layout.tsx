import { requireUnAuth } from "@/lib/auth-utils";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireUnAuth();
  return <>{children}</>;
}
