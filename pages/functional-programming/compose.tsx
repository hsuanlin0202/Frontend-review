import { Layout } from "components/layout";
import { useState } from "react";

var compose = function (f: any, g: any) {
  return function (x: any) {
    return f(g(x));
  };
};

const Compose = (): JSX.Element => {
  const array = ["a", "b", "c", "d"];

  const [result, setResult] = useState<string>("");

  const toUpperCase = (x: string) => {
    return x.toUpperCase();
  };

  const exclaim = (x: string) => {
    return x + "!";
  };

  const head = (x: string[]) => {
    return x[0];
  };

  const reverse = (x: string[]) => x.reverse();

  return (
    <Layout.Base title="Compose">
      <div className="flex flex-col space-y-4">
        <p>{`Array: [${array.join(",")}]`}</p>

        <p>{`Result: ${result}`}</p>

        <button
          className="border mr-4 px-2"
          type="button"
          onClick={() => setResult(compose(exclaim, reverse)(array))}
        >
          <span>compose(exclaim, reverse)</span>
        </button>

        <button
          className="border mr-4 px-2"
          type="button"
          onClick={() => setResult(compose(toUpperCase, head)(array))}
        >
          <span>compose(toUpperCase, head)</span>
        </button>

        <button
          className="border mr-4 px-2"
          type="button"
          onClick={() => setResult(compose(head, reverse)(array))}
        >
          <span>compose(head, reverse)</span>
        </button>
      </div>
    </Layout.Base>
  );
};

export default Compose;
