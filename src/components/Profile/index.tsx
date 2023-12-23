import classNames from "classnames";

import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  title: string;
  className?: string;
  "data-testid"?: string;
}

export function Profile(props: Props) {
  const className = classNames("__profile", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <div data-testid={props["data-testid"]} className={className}>
      <strong className={style.title}>{props.title}</strong>
      <div className={style.content}>{props.children}</div>
    </div>
  );
}