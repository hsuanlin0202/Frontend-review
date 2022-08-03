import { Layout } from "components/Layout";
import { useId, useState, useTransition } from "react";

const UseTransition = (): JSX.Element => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      // show pending whileo counting.
      setCount((c) => c + 1);
    });
  }

  return (
    <Layout.Base title="useTransition">
      <>
        {isPending && <p>Pending...</p>}
        {!isPending && (
          <button className="bg-red-100 px-2 py-1" onClick={handleClick}>
            {count}
          </button>
        )}
      </>
    </Layout.Base>
  );
};

export default UseTransition;
