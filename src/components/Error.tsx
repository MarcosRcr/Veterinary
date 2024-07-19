import { ReactNode } from "react";

export const Error = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-center my-4 text-red-700 font-semibold uppercase">
      {children}
    </p>
  );
};
