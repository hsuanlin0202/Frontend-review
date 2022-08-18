import { Layout } from "components/layout";
import { useState } from "react";

function validateData(jsonData: string) {
  let data;
  if (jsonData.length === 0) throw new Error("empty data");

  try {
    data = JSON.parse(jsonData);
  } catch (e) {
    console.log("Error data", e);
    data = null;
  }
  return data;
}

const ErrorHandling = (): JSX.Element => {
  const [testInput, setTestInput] = useState<string>(
    `{"data":[1, 5, "false"]}`
  );

  const errorHandler = () => {
    console.log(validateData(testInput));
  };

  const rangeErrorHandler = () => {
    console.log((3.14159).toFixed(100000));
  };

  const referenceErrorHandler = () => {
    // @ts-ignore
    console.log(bar);
  };

  const syntaxErrorHandler = () => {
    console.log(`'}' expected.`);
  };

  const typeErrorHandler = () => {
    const bar = {};
    // @ts-ignore
    bar();
  };

  const URIErrorHandler = () => {
    decodeURIComponent("%");
  };

  return (
    <Layout.Base title="Error Handling">
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-bold">Error Types</h2>
        <div className="flex">
          <h3 className="font-bold mr-4">Error</h3>
          <input
            type="text"
            className="border mr-4"
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
          />
          <button type="button" className="px-2 border" onClick={errorHandler}>
            <span>Console Json</span>
          </button>
        </div>

        <div className="flex">
          <h3 className="font-bold mr-4">Range Error</h3>
          <span>(3.14159).toFixed(100000)</span>
          <button
            type="button"
            className="ml-4 px-2 border"
            onClick={rangeErrorHandler}
          >
            <span>Try</span>
          </button>
        </div>

        <div className="flex">
          <h3 className="font-bold mr-4">Reference Error</h3>
          <span>{`const boo = 0;`}</span>
          <button
            type="button"
            className="ml-4 px-2 border"
            onClick={referenceErrorHandler}
          >
            <span>Print [bar]</span>
          </button>
        </div>

        <div className="flex">
          <h3 className="font-bold mr-4">Syntax Error</h3>
          <span>{`if(a==1){ a++;`}</span>

          <button
            type="button"
            className="ml-4 px-2 border"
            onClick={syntaxErrorHandler}
          >
            <span>Run</span>
          </button>
        </div>

        <div className="flex">
          <h3 className="font-bold mr-4">Type Error</h3>
          <span>{`bar();`}</span>

          <button
            type="button"
            className="ml-4 px-2 border"
            onClick={typeErrorHandler}
          >
            <span>Run</span>
          </button>
        </div>

        <div className="flex">
          <h3 className="font-bold mr-4">URI Error</h3>
          <span>{`decodeURIComponent("%");`}</span>

          <button
            type="button"
            className="ml-4 px-2 border"
            onClick={URIErrorHandler}
          >
            <span>Run</span>
          </button>
        </div>
      </div>
    </Layout.Base>
  );
};

export default ErrorHandling;
