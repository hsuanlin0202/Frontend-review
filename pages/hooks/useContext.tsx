import { Layout } from "components/layout";
import { useTheme } from "hooks/useContext";

const UseContext = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Layout.Base title="useContext">
      <>
        <p>Click Change Theme Button to Change Current Theme:</p>
        <p>Background Color: {theme.background}</p>
        <p>Content Color: {theme.word}</p>
      </>
    </Layout.Base>
  );
};

export default UseContext;
