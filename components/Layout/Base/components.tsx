import clsx from "clsx";

type ThemeButtonProps = {
  className: string;
  title: string;
  onClick: () => void;
};
export const ThemeButton = ({
  className,
  title,
  onClick,
}: ThemeButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={clsx("px-2 border border-gray-dark ml-4", className)}
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  );
};
