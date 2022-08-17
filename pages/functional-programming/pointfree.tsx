import { Layout } from "components/layout";
import { both, filter, map, pipe, prop, reduce } from "ramda";
import { useState } from "react";
type DataTypes = {
  date: string;
  item: "A" | "B" | "C";
  amount: number;
};
const data: DataTypes[] = [
  { date: "2018-01-01", item: "A", amount: 5 },
  { date: "2019-01-11", item: "B", amount: 10 },
  { date: "2018-02-05", item: "C", amount: 3 },
  { date: "2019-03-21", item: "A", amount: 1 },
  { date: "2018-04-18", item: "B", amount: 522 },
  { date: "2017-01-01", item: "C", amount: 51 },
  { date: "2016-01-13", item: "A", amount: 4 },
  { date: "2019-01-18", item: "A", amount: 345 },
  { date: "2018-12-18", item: "B", amount: 7 },
  { date: "2019-11-24", item: "B", amount: 64 },
  { date: "2019-07-15", item: "C", amount: 22 },
  { date: "2019-06-25", item: "A", amount: 546 },
  { date: "2019-04-04", item: "C", amount: 234 },
  { date: "2019-05-07", item: "B", amount: 1111 },
  { date: "2019-07-15", item: "A", amount: 236 },
  { date: "2019-10-16", item: "B", amount: 81 },
  { date: "2019-11-20", item: "A", amount: 90 },
];

const PointFree = (): JSX.Element => {
  const [amount, setAmount] = useState<number>(0);

  // loop
  const getItemA2019Amount = () => {
    let amount = 0;
    data.forEach((row) => {
      if (new Date(row.date).getFullYear() !== 2019) return;
      if (row.item !== "A") return;
      amount += row.amount;
    });
    setAmount(amount);
  };

  // FP:
  const fp_2019 = (row: DataTypes) => new Date(row.date).getFullYear() === 2019;

  const fp_itemA = (row: DataTypes) => row.item === "A";

  const fp_Amount = (row: DataTypes) => row.amount;

  const fp_sum = (total: number, num: number) => total + num;

  const total = data
    .filter((row) => fp_2019(row) && fp_itemA(row))
    .map(fp_Amount)
    .reduce(fp_sum, 0);

  console.log("FP result: " + total);

  // point free
  const propDate: any = prop("date");

  const propItem: any = prop("item");

  const propAmount: any = prop("amount");

  const is2019 = (year: string) => new Date(year).getFullYear() === 2019;

  const isA = (item: string) => item === "A";

  const isDateInYear = pipe(propDate, is2019);

  const isAItem = pipe(propItem, isA);

  const combineFuncBasic = pipe(
    filter(both(pipe(propDate, is2019), pipe(propItem, isA))),
    map(propAmount),
    reduce(fp_sum, 0)
  );

  console.log(combineFuncBasic(data));

  const filterIsItemAIn2019 = filter(both(isDateInYear, isAItem));

  const getAmount: any = map(propAmount);

  const sumTotal = reduce(fp_sum, 0);

  const combineFuncAdvance = pipe(filterIsItemAIn2019, getAmount, sumTotal);

  console.log(combineFuncAdvance(data));

  return (
    <Layout.Base title="Point Free">
      <>
        <p>{`2019 Item A Total Amount: ${amount}`}</p>

        <button
          type="button"
          className="border mr-4 px-2"
          onClick={getItemA2019Amount}
        >
          For Loop
        </button>
      </>
    </Layout.Base>
  );
};

export default PointFree;
