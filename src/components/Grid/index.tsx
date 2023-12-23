import classNames from "classnames";

import { Column } from "./Column";
import { Row } from "./Row";
import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  "data-testid"?: string;
}

function Grid(props: Props) {
  const className = classNames("__grid", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <div data-testid={props["data-testid"]} className={className}>
      {props.children}
    </div>
  );
}

Grid.Row = Row;
Grid.Column = Column;

export { Grid };