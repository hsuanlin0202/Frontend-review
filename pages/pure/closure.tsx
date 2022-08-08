import { Layout } from "components/layout";
import { useState } from "react";

const Closure = (): JSX.Element => {
  const greet = (lang: "en" | "zh") => {
    return (name: string) => {
      if (lang === "en") return `Hi! ${name}.`;

      if (lang === "zh") return `嗨！ ${name}。`;
    };
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const lang = e.target.lang.value;
    const name = e.target.name.value;

    const greeting = greet(lang);
    setPrint(greeting(name) || "");
  };

  const [print, setPrint] = useState<string>("");

  return (
    <Layout.Base title="Closure">
      <form className="flex space-x-4 mb-10" onSubmit={handleSubmit}>
        <input className="border px-2" type="text" id="name" />
        <select className="border" id="lang">
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
        <button className=" bg-gray-darker text-white px-2" type="submit">
          Submit
        </button>
      </form>

      <p>{print}</p>
    </Layout.Base>
  );
};

export default Closure;
