import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
const Base = ({ title, children }: Props): JSX.Element => {
  return (
    <div className="py-4">
      <h1 className="mb-4 px-4 text-3xl">{title}</h1>
      <main className="w-full bg-white p-4">{children}</main>
    </div>
  );
};

export const Layout = { Base };
