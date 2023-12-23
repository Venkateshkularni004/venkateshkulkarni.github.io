import classNames from "classnames";

import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  "data-testid"?: string;
}

export function Row(props: Props) {
  const className = classNames("__grid_row", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <div data-testid={props["data-testid"]} className={className}>
      {props.children}
    </div>
  );
}