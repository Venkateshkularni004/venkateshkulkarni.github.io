import classNames from "classnames";

import { Experience } from "./Experience";
import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  "data-testid"?: string;
}

function Experiences(props: Props) {
  const className = classNames("__experiences", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <div data-testid={props["data-testid"]} className={className}>
      {props.children}
    </div>
  );
}

Experiences.Experience = Experience;

export { Experiences };