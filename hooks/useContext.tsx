import { createContext, ReactNode, useContext, useState } from "react";

const themes = {
  light: {
    word: "#000000",
    background: "#eeeeee",
  },
  dark: {
    word: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes.light);

type ProviderProps = {
  children: ReactNode;
};

export function ContextTheme({ children }: ProviderProps) {
  const [currentTheme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={themes[currentTheme]}>
      <div>
        <button
          type="button"
          className="border border-gray-dark px-2"
          onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        >
          <span>Change Theme</span>
        </button>
      </div>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
