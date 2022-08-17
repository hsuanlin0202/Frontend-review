import { Layout } from "components/layout";
import {
  compose,
  filter,
  map,
  pipe,
  prop,
  reverse,
  mean,
  toLower,
} from "ramda";

type DataTypes = {
  name: string;
  horsepower: number;
  dollar_value: number;
  in_stock: boolean;
};
const data: DataTypes[] = [
  {
    name: "Ferrari FF",
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true,
  },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
  },
  {
    name: "Audi R8",
    horsepower: 525,
    dollar_value: 114200,
    in_stock: false,
  },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
  },
];

const PointFree2 = (): JSX.Element => {
  const propStock: any = prop("in_stock");

  const propName: any = prop("name");

  const propDollarValue: any = prop("dollar_value");

  const isTrue = (in_stock: boolean) => in_stock === true;

  const inStock = pipe(propStock, isTrue);

  const head = (x: string[]) => {
    return x[0];
  };

  const isLastInStockHandler = () => {
    // const cars = data.filter((car) => car.in_stock === true).reverse()[0];

    const isLastInStock = compose(head, reverse, filter(inStock));

    console.log(isLastInStock(data));
  };

  const firstCarNameHandler = () => {
    // const name = data[0].name;

    const firstCarName = compose(propName, head);

    console.log(firstCarName(data));
  };

  const averageDollarValueHandler = () => {
    // const value =
    //   data.map((car) => car.dollar_value).reduce((p, n) => p + n) / data.length;
    const averageDollarValue = compose(mean, map(propDollarValue));

    console.log(averageDollarValue(data));
  };

  const sanitizeNamesHandler = () => {
    const underscore = (name: string) => name.replace(/\W+/g, "_");
    // const sanitized = data.map((car) =>
    //   car.name.toLowerCase().replace(/\W+/g, "_")
    // );

    const sanitizeNames = map(pipe(prop("name"), toLower, underscore));

    console.log(sanitizeNames(data));
  };

  const availablePricesHandler = () => {
    // const availablePrices = function (cars: DataTypes[]) {
    //   var available_cars = _.filter(_.prop("in_stock"), cars);
    //   return available_cars
    //     .map(function (x) {
    //       return accounting.formatMoney(x.dollar_value);
    //     })
    //     .join(", ");
    // };

    const available_cars = compose(
      mean,
      map(prop("dollar_value")),
      filter(propStock)
    );

    console.log(available_cars(data));
  };

  return (
    <Layout.Base title="Point Free Example">
      <div className="flex flex-col space-y-4">
        <button
          type="button"
          className="border mr-4 px-2"
          onClick={isLastInStockHandler}
        >
          Last Car In Stock
        </button>

        <button
          type="button"
          className="border mr-4 px-2"
          onClick={firstCarNameHandler}
        >
          Name of First Car
        </button>

        <button
          type="button"
          className="border mr-4 px-2"
          onClick={averageDollarValueHandler}
        >
          Average Dollar Value
        </button>

        <button
          type="button"
          className="border mr-4 px-2"
          onClick={sanitizeNamesHandler}
        >
          Sanitize Names
        </button>

        <button
          type="button"
          className="border mr-4 px-2"
          onClick={availablePricesHandler}
        >
          Available Prices
        </button>
      </div>
    </Layout.Base>
  );
};

export default PointFree2;
