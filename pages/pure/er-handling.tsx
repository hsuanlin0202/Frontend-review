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

  const [email, setEmail] = useState<{ email: string; note: string }>({
    email: "",
    note: "",
  });

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

  const validateEmail = () => {
    try {
      checkEmail();
    } catch (e: any) {
      setEmail({ ...email, note: e.message as string });
    }
  };

  const checkEmail = () => {
    if (email.email.length === 0)
      throw new Error("Email address can not be empty.");

    if (email.email.indexOf("@") === -1)
      throw new Error("Please enter a valid email address.");

    setEmail({ ...email, note: "Email address Passed." });
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
          <code>(3.14159).toFixed(100000)</code>
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
          <code>{`const boo = 0;`}</code>
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
          <code>{`if(a==1){ a++;`}</code>

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
          <code>{`bar();`}</code>

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
          <code>{`decodeURIComponent("%");`}</code>

          <button
            type="button"
            className="ml-4 px-2 border"
            onClick={URIErrorHandler}
          >
            <span>Run</span>
          </button>
        </div>
        <hr />

        <h2 className="text-xl font-bold">try...catch</h2>

        <div className="flex items-center">
          <h3 className="font-bold mr-4">Email</h3>
          <input
            type="text"
            className="border px-2 mr-4"
            value={email.email}
            onChange={(e) => setEmail({ email: e.target.value, note: "" })}
            placeholder="Insert Email"
          />
          <button type="button" className="px-2 border" onClick={validateEmail}>
            <span>Check</span>
          </button>

          {email.note && <p className="text-sm text-red-500">{email.note}</p>}
        </div>
      </div>
    </Layout.Base>
  );
};

export default ErrorHandling;
