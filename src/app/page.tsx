import LogoutButton from "@/features/auth/components/logout-button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const HomePage = async () => {
  await requireAuth();
  const data = await caller.getCurrentUser();
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center gap-4">
      {JSON.stringify(data, null, 2)}
      <LogoutButton />
    </div>
  );
};

export default HomePage;
