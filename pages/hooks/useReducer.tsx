import { Layout } from "components/layout";
import { useReducer } from "react";
type ButtonProps = {
  onClick: () => void;
  title: string;
  disabled?: boolean;
};
const Button = ({ onClick, title, disabled = false }: ButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-full px-6 py-1 border border-gray-dark text-gray-dark hover:bg-gray-normal active:bg-gray-lighter"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{title}</span>
    </button>
  );
};

function counter(
  state: { count: number; canReset: boolean },
  action: { type: "increment" | "decrement" | "reset" }
) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, canReset: true };
    case "decrement":
      return { count: state.count - 1, canReset: true };
    case "reset":
      return { count: 0, canReset: false };
    default:
      throw new Error();
  }
}

const UseReducer = (): JSX.Element => {
  const initialState = { count: 0, canReset: true };

  const [state, dispatch] = useReducer(counter, initialState);

  return (
    <Layout.Base title="useReducer">
      <div className="flex items-center space-x-4 text-2xl">
        <Button title="-" onClick={() => dispatch({ type: "decrement" })} />

        <p className="w-20 text-center bg-gray-light">{state.count}</p>

        <Button title="+" onClick={() => dispatch({ type: "increment" })} />

        {state.canReset && (
          <Button title="Reset" onClick={() => dispatch({ type: "reset" })} />
        )}
      </div>
    </Layout.Base>
  );
};

export default UseReducer;
