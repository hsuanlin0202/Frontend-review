import { Layout } from "components/layout";
import { useEffect, useState } from "react";

const AsyncNAwait = (): JSX.Element => {
  const [status, setStatus] = useState<string>();

  function get(): Promise<string> {
    setStatus(`I am in first await function, waiting for resolving.`); //  STEP 1-3
    return new Promise((resolve, _) => {
      //  STEP 1-4
      setTimeout(() => resolve("XXX"), 3000); //  STEP 1-5 To STEP 2 after 1 sec
    });
  }

  function process(value: string): Promise<string> {
    setStatus(`Using value from first await in second await: [${value}]`); //  STEP 2-3
    return new Promise((resolve, _) => {
      //  STEP 2-4
      setTimeout(() => resolve(`${value}-VVV`), 5000); // STEP 2-5 To STEP 3 after 1 sec
    });
  }

  async function main() {
    setStatus("Start fn"); // STEP 1-1

    let val = await get(); // STEP 1-2

    setStatus(`Got value after first await function: [${val}]`); // STEP 2-1

    let result = await process(val); // STEP 2-2

    setStatus(`Result: ${result} `); // STEP 3-1
    return result;
  }

  useEffect(() => {
    main();
  }, []);

  return (
    <Layout.Base title={"Async & Await"}>
      <>{status}</>
    </Layout.Base>
  );
};

export default AsyncNAwait;
