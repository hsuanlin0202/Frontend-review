import { ReactNode } from "react";
import Link from "next/link";
import { Menu } from "constant/route";
import { useTheme } from "hooks/useContext";
import { ThemeButton } from "./components";

type Props = {
  title: string;
  children: ReactNode;
};

export const Base = ({ title, children }: Props): JSX.Element => {
  const theme = useTheme();

  if (!theme) return <></>;

  const { dispatch } = theme;

  return (
    <div
      className="w-full"
      style={{ color: theme.state.word, background: theme.state.background }}
    >
      <header className="w-full p-4 flex justify-between items-center">
        <h1 className="text-3xl flex-1">FE Review</h1>

        <ThemeButton
          className="bg-gray-darkest text-white"
          title="dark"
          onClick={() => dispatch({ type: "dark" })}
        />
        <ThemeButton
          className="bg-white text-black-10"
          title="light"
          onClick={() => dispatch({ type: "light" })}
        />
      </header>

      <div className="w-full flex h-full">
        <ul className="w-40 flex flex-col space-y-10 pl-2">
          {Menu.map((subject) => {
            return (
              <li key={`mene-${subject.subject}`}>
                <h2 className="text-xl font-bold mb-2">{subject.subject}</h2>
                <ul className="flex flex-col ml-4 space-y-2">
                  {subject.page.map((page) => (
                    <li key={`menu-item-${subject.subject}-${page.title}`}>
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

        <div className="flex-1 bg-white text-gray-darkest p-4">
          <h1 className="mb-4 text-3xl">{title}</h1>

          <main className="w-full text-gray-darker">{children}</main>
        </div>
      </div>
    </div>
  );
};
