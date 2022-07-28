import { Layout } from "components/Layout";
import { useEffect, useState } from "react";

const UseEffect = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count >= 10) return;

    const id = setInterval(() => {
      setCount((c) => {
        if (c < 5) return c + 1;
        return c;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Layout.Base title="useEffect">
      <p className="w-20 text-center bg-gray-light">{count}</p>
    </Layout.Base>
  );
};

export default UseEffect;
