import { Layout } from "components/layout";
import { useState } from "react";

const PromiseJS = (): JSX.Element => {
  const [status, setStatus] = useState<string>("");

  const waitASecond = (seconds: number) => {
    console.log("start", seconds);
    return new (Promise as any)((resolve: any, _: any) => {
      setTimeout(function () {
        seconds++;
        resolve(seconds);
      }, 1000);
    });
  };

  const promise = () => {
    setStatus("In progress...");
    waitASecond(0)
      .then((seconds: number) => {
        console.log("Got the first value:", seconds, " from Promise.");
        return waitASecond(seconds);
      })
      .then((seconds: number) => {
        console.log("Got second value:", seconds, " from first .then");
        return waitASecond(seconds);
      })
      .then((seconds: number) => {
        console.log("Got third value", seconds, " from the second .then");
      })
      .finally(() => setStatus("Done"));
  };

  const promiseAll = () => {
    setStatus("In progress...");
    Promise.all([waitASecond(0), waitASecond(1), waitASecond(2)])
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => setStatus("Done"));
  };

  const promiseRace = () => {
    setStatus("In progress...");
    Promise.race([waitASecond(0), waitASecond(1), waitASecond(2)])
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      .finally(() => setStatus("Done"));
  };

  return (
    <Layout.Base title="Promise">
      <>
        <p className="mb-4">{status}</p>

        <button className="border mr-4 px-2" type="button" onClick={promise}>
          <span>Basic Promise</span>
        </button>

        <button className="border mx-4 px-2" type="button" onClick={promiseAll}>
          <span>Promise.all()</span>
        </button>

        <button
          className="border mx-4 px-2"
          type="button"
          onClick={promiseRace}
        >
          <span>Promise.race()</span>
        </button>
      </>
    </Layout.Base>
  );
};

export default PromiseJS;
