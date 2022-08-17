import { Layout } from "components/layout";
import { ComponentType, ReactNode } from "react";

type Base = { onClick: () => void };

const withLoggingOnClick = <TProps extends Base>(
  Component: ComponentType<TProps>
) => {
  return (props: TProps) => {
    const onClick = () => {
      console.log("Log on click something");
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

type ButtonProps = { children: ReactNode; onClick: () => void };

const SimpleButton = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
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
      <>
        <ButtonWithLoggingOnClick
          onClick={() => console.log("Button With Logging OnClick")}
        >
          With logging on click
        </ButtonWithLoggingOnClick>

        <ButtonWithLoggingOnClickWithParams
          onClick={() => console.log("Button With Logging OnClick With Params")}
        >
          With logging on click with params
        </ButtonWithLoggingOnClickWithParams>

        <ButtonWithLoggingOnClickWithProps
          onClick={() => console.log("Button With Logging OnClick With Props")}
          logText="this is Page button"
        >
          With logging on click with props
        </ButtonWithLoggingOnClickWithProps>
      </>
    </Layout.Base>
  );
};

export default HOC;
