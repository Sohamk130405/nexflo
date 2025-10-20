"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const ClientSidePage = () => {
  const trpc = useTRPC();
  const { data: users, isLoading } = useQuery(trpc.getUsers.queryOptions());
  if (isLoading) return <div>Loading...</div>;
  return <div className="text-red-500">{JSON.stringify(users)}</div>;
};

export default ClientSidePage;
