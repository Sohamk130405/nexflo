"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const HomePage = () => {
  const { data } = authClient.useSession();
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      {JSON.stringify(data)}
      {data && <Button onClick={() => authClient.signOut()}>LogOut</Button>}
    </div>
  );
};

export default HomePage;
