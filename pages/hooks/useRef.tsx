import { Layout } from "components/Layout";
import { useRef } from "react";

const UseRef = (): JSX.Element => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (null === inputEl.current) return;
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };

  return (
    <Layout.Base title="useRef">
      <>
        <input className="border" ref={inputEl} type="text" />
        <button
          type="button"
          className="mx-2 px-2 border"
          onClick={onButtonClick}
        >
          Focus the input
        </button>
      </>
    </Layout.Base>
  );
};

export default UseRef;
