import { Layout } from "components/layout";
import { ChangeEvent, useMemo, useState } from "react";

const slowFunction = () => {
  console.log("Calling other function which may be very slow.");
  return true;
};

const UseMemo = (): JSX.Element => {
  const [number, setNumber] = useState<number>(0);

  const [value, setValue] = useState<string>("");

  // control call time of a variable which is returning from a complicated function.
  const isEven = useMemo(() => {
    console.log("update when first input is changed.");
    if (number % 2 === 0) return slowFunction();
    return false;
  }, [number]);

  const changeNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value || "0"));
  };

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // const [order, setOrder] = useState<{ fruit: string }>({ fruit: "" });

  //   const select = useMemo(() => {

  //     if (order.fruit === "chair") return { isFruit: false };
  //     return { isFruit: true };
  //   }, [order]);

  //   useEffect(() => {
  //     if (!order.fruit) return;
  //     console.log(`I ${select.isFruit ? "" : "didn't "} select a fruit.`);
  //   }, [select]);

  return (
    <Layout.Base title="useMemo">
      <div>
        <input
          className=" w-20 border px-2"
          type="number"
          value={number}
          onChange={changeNumberHandler}
        />
        {isEven && <span>{` is even`}</span>}
      </div>
      <div>
        <input
          className="w-20 border px-2"
          type="text"
          value={value}
          onChange={changeValueHandler}
        />
        <span> Change second input value doesn't call 'isEven' function. </span>
      </div>

      {/* <h2>Example 2</h2>

      <div>
        <select
          className="border px-2"
          onChange={(e) => setOrder({ fruit: e.currentTarget.value })}
        >
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="avocado">Avocado</option>
          <option value="chair">Chair</option>
        </select>
      </div> */}
    </Layout.Base>
  );
};

export default UseMemo;
