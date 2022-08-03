import { useTheme } from "hooks/useContext";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
const Base = ({ title, children }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <div
      className="py-4 h-screen"
      style={{ color: theme.word, background: theme.background }}
    >
      <h1 className="mb-4 px-4 text-3xl">{title}</h1>
      <main className="w-full bg-white p-4 text-gray-darker">{children}</main>
    </div>
  );
};

export const Layout = { Base };
