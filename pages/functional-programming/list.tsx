import { useState } from "react";
import { compose } from "ramda";
import clsx from "clsx";
import { Layout } from "components/layout";

type ResponseTypes = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const PureFunction = (): JSX.Element => {
  const [list, setList] = useState<ResponseTypes[]>([]);

  const addInList = (data: ResponseTypes) => setList([...list, data]);

  const fetchData = (path: string) =>
    fetch(path)
      .then((response) => response.json())
      .then(addInList);

  const url = (id: number) =>
    `https://jsonplaceholder.typicode.com/todos/${id}`;

  const app = compose(fetchData, url);

  const addListHandler = () => app(list.length + 1);

  return (
    <Layout.Base title="FP List">
      <>
        <button
          className="border mr-4 mb-4 px-2"
          type="button"
          onClick={addListHandler}
        >
          <span>Add</span>
        </button>

        <ul>
          {list.map((item, index) => (
            <li className="mb-2 flex items-center" key={`list-${index}`}>
              <div
                className={clsx(
                  "w-2 h-2 mr-2",
                  item.completed ? "bg-green-500" : "bg-red-500"
                )}
              ></div>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </>
    </Layout.Base>
  );
};

export default PureFunction;
