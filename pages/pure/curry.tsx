import { Layout } from "components/layout";
import { useState } from "react";

type ResponseTypes = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Curry = (): JSX.Element => {
  const [status, setStatus] = useState<string>("");

  const curriedFetchData = async (path: string) => {
    const response = await fetch(path);
    const json = await response.json();

    return function (_callback: (value: ResponseTypes) => void) {
      console.log("Step 1: Get data, return data.");
      _callback(json);
    };
  };

  const curryClickHandler = async () => {
    setStatus("getting data...");

    var getData1 = curriedFetchData(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    var getData2 = curriedFetchData(
      "https://jsonplaceholder.typicode.com/todos/2"
    );

    (await getData1)(async (result1: ResponseTypes) => {
      (await getData2)((result2: ResponseTypes) => {
        console.log("Step 2: Use data." + result1.title + " " + result2.title);
        setStatus("action completed.");
      });
    });
  };

  const regularClickHandler = async () => {
    setStatus("getting data...");

    console.log("Get data and use data in same function.");

    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json1 = await response1.json();

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const json2 = await response2.json();

    console.log(json1.title + json2.title);

    setStatus("action completed.");
  };

  return (
    <Layout.Base title="curry">
      <div className="flex flex-col space-y-4">
        <p>{status}</p>
        <button
          className="border mr-4 px-2"
          type="button"
          onClick={curryClickHandler}
        >
          <span>Curry</span>
        </button>

        <button
          className="border mr-4 px-2"
          type="button"
          onClick={regularClickHandler}
        >
          <span>Regular</span>
        </button>
      </div>
    </Layout.Base>
  );
};

export default Curry;
