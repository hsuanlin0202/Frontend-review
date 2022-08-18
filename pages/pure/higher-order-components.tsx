import { ComponentType, ReactNode } from "react";
import clsx from "clsx";
import { Layout } from "components/layout";

type Base = { onClick: () => void };

const withLoggingOnClick = <TProps extends Base>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps) => {
    const onClick = () => {
      console.log("Log on click");
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };
};

const withLoggingOnClickWithParams = <TProps extends Base>(
  Component: ComponentType<TProps>,
  params: { text: string }
) => {
  return (props: TProps) => {
    const onClick = () => {
      console.log("Log on click: ", params.text);
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };
};

const withLoggingOnClickWithProps = <TProps extends Base>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps & { logText: string }) => {
    const onClick = () => {
      console.log("Log on click: ", props.logText);
      props.onClick();
    };

    return <Component {...props} onClick={onClick} />;
  };
};

type ButtonProps = {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const SimpleButton = ({
  className,
  children,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={clsx("px-2 border", disabled && "bg-gray-normal", className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const ButtonWithLoggingOnClick = withLoggingOnClick(SimpleButton);

const ButtonWithLoggingOnClickWithParams = withLoggingOnClickWithParams(
  SimpleButton,
  { text: "button component" }
);

const ButtonWithLoggingOnClickWithProps =
  withLoggingOnClickWithProps(SimpleButton);

const HOC = (): JSX.Element => {
  return (
    <Layout.Base title="Higher Order Components">
      <div className="flex flex-col space-y-4 ">
        <SimpleButton onClick={() => alert("Simple button")}>
          Simple Button
        </SimpleButton>

        <ButtonWithLoggingOnClick
          className=""
          onClick={() => alert("Button With Logging OnClick")}
        >
          With logging on click
        </ButtonWithLoggingOnClick>

        <ButtonWithLoggingOnClickWithParams
          onClick={() => alert("Button With Logging OnClick With Params")}
        >
          With logging on click with params
        </ButtonWithLoggingOnClickWithParams>

        <ButtonWithLoggingOnClickWithProps
          onClick={() => alert("Button With Logging OnClick With Props")}
          logText="this is Page button"
        >
          With logging on click with props
        </ButtonWithLoggingOnClickWithProps>
      </div>
    </Layout.Base>
  );
};

export default HOC;
