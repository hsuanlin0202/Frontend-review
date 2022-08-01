import { Layout } from "components/Layout";
import { ChangeEvent, useCallback, useState } from "react";

const slowFunction = () => {
  console.log("Calling other function which may be very slow.");
  return true;
};

const UseCallback = (): JSX.Element => {
  const [number, setNumber] = useState<number>(0);

  const [value, setValue] = useState<string>("");

  // control call time of a variable which is returning from a complicated function.
  const isMoreThanFiveWords = useCallback(
    (e: string) => {
      console.log("update when first input is changed.");
      if (e.length > number) return slowFunction();
      return false;
    },
    [number]
  );

  const changeNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value || "0"));
  };

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Layout.Base title="useMemo">
      <div>
        <input
          className=" w-20 border px-2"
          type="number"
          value={number}
          onChange={changeNumberHandler}
        />
      </div>
      <div>
        <input
          className="w-20 border px-2"
          type="text"
          value={value}
          onChange={changeValueHandler}
        />
        {<span>{isMoreThanFiveWords(value) ? "Over" : "Below"}</span>}
        <span> </span>
      </div>
    </Layout.Base>
  );
};

export default UseCallback;
