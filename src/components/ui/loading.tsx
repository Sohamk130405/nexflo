import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      <p className="text-sm text-muted-foreground">Loading, please wait...</p>
    </div>
  );
};
