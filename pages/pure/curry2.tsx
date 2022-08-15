import { Layout } from "components/layout";
import { useState } from "react";

// Currying is a transform that makes f(a,b,c) callable as f(a)(b)(c)
function curry(func: any) {
  return function curried(this: any, ...args: any[]) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (this: any, ...args2: any[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const Curry2 = (): JSX.Element => {
  const [status, setStatus] = useState<string[]>([]);

  const [date, setDate] = useState<Date>(new Date());

  const [action, setAction] = useState<string>("ADD");

  const [message, setMessage] = useState<string>("");

  // Original function
  const addLog = (date: Date, action: string, message: string) => {
    setStatus([
      ...status,
      `[${date.getMonth() + 1}/${date.getDate()}] [${action}] ${message}`,
    ]);
  };

  const pushRegularLog = () => addLog(date, action, message);

  const curriedAddLog = curry(addLog);

  // Curried function
  const pushTodayLog = () => curriedAddLog(new Date())(action)(message);

  const pushTodayAddLog = () => curriedAddLog(new Date())("ADD")(message);

  return (
    <Layout.Base title="Curry - 2">
      <div className="flex flex-col space-y-4">
        <div className="px-10 py-2 flex justify-between items-center bg-gray-normal">
          <input
            type="date"
            onChange={(e) => setDate(new Date(e.target.value))}
          />

          <select onChange={(e) => setAction(e.target.value)}>
            <option value="ADD">ADD</option>
            <option value="EDIT">EDIT</option>
            <option value="DELETE">DELETE</option>
          </select>

          <input type="text" onChange={(e) => setMessage(e.target.value)} />
        </div>
        <ul className="my-4">
          {status.map((item, index) => (
            <li key={`log-${index}`}>{item}</li>
          ))}
        </ul>
        <button
          className="border mr-4 px-2"
          type="button"
          onClick={pushRegularLog}
        >
          <span>Regular Log</span>
        </button>

        <button
          className="border mr-4 px-2"
          type="button"
          onClick={pushTodayLog}
        >
          <span>Today Log</span>
        </button>

        <button
          className="border mr-4 px-2"
          type="button"
          onClick={pushTodayAddLog}
        >
          <span>Today ADD Log</span>
        </button>
      </div>
    </Layout.Base>
  );
};

export default Curry2;
