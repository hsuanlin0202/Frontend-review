import { Menu } from "constant/route";
import { useTheme } from "hooks/useContext";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
const Base = ({ title, children }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <div
      className="py-4 w-full h-screen"
      style={{ color: theme.word, background: theme.background }}
    >
      <div className="w-full flex">
        <ul
          className="w-40 flex flex-col space-y-10 pl-2"
          style={{ color: theme.word, background: theme.background }}
        >
          {Menu.map((subject) => {
            return (
              <li>
                <h2 className="text-xl font-bold">{subject.subject}</h2>
                <ul className="flex flex-col ml-4 space-y-2">
                  {subject.page.map((page) => (
                    <li>
                      <Link href={page.href}>
                        <a>{page.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="flex-1">
          <h1 className="mb-4 px-4 text-3xl">{title}</h1>
          <main className="w-full bg-white p-4 text-gray-darker">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export const Layout = { Base };
