import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

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

function changeThemes(
  state: { word: string; background: string },
  action: { type: "dark" | "light" }
) {
  switch (action.type) {
    case "dark":
      return themes[action.type];
    case "light":
      return themes[action.type];
    default:
      throw new Error();
  }
}

type UseThemeProps = {
  state: {
    word: string;
    background: string;
  };
  dispatch: Dispatch<{
    type: "dark" | "light";
  }>;
};
const ThemeContext = createContext<UseThemeProps | null>(null);

type ProviderProps = {
  children: ReactNode;
};

export function ContextTheme({ children }: ProviderProps) {
  const initState = {
    word: "#000000",
    background: "#eeeeee",
  };

  const [state, dispatch] = useReducer(changeThemes, initState);

  const ThemeProvider = {
    state,
    dispatch,
  };

  return (
    <ThemeContext.Provider value={ThemeProvider}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
