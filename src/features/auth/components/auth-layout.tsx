import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-svh items-center flex-col justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-2 self-center font-medium italic"
        >
          <Image src={"/logo.svg"} alt="NextFlo" width={30} height={30} />
          NextFlo
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;