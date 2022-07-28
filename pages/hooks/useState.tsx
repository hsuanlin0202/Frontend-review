import { Layout } from "components/Layout";
import { useState } from "react";
type ButtonProps = {
  onClick: () => void;
  title: string;
};
const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-full px-6 py-1 border border-gray-dark text-gray-dark hover:bg-gray-normal active:bg-gray-lighter"
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
};

const UseState = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <Layout.Base title="useState">
      <div className="flex items-center space-x-4 text-2xl">
        <Button title="-" onClick={() => setCount(count - 1)} />

        <p className="w-20 text-center bg-gray-light">{count}</p>

        <Button title="+" onClick={() => setCount(count + 1)} />
      </div>
    </Layout.Base>
  );
};

export default UseState;
