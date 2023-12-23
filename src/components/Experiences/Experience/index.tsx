import classNames from "classnames";

import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  from: string;
  to: string;
  company: string;
  role: string;
  location: string;
  className?: string;
  "data-testid"?: string;
}

export function Experience(props: Props) {
  const className = classNames("__experiences_experience", style.container, props.className);

  /**
   * Retrieve the year to display on the left side.
   * 
   * @remarks
   * The function ensures consistent sizing and only allows numbers. If the "to" year is set to "present", it is
   * converted to the current year.
   */
  const year = (): string => {
    if (props.to.toLowerCase() === "present") {
      return new Date().getFullYear().toString();
    }
    return props.to;
  };

  /**
   * Return the component
   */
  return (
    <article data-testid={props["data-testid"]} className={className}>
      <time>{year()}</time>
      <div className={style.icon}>
        <i />
      </div>
      <div className={style.content}>
        <h3 className="stop">{props.company}</h3>
        <aside>
          <time>
            {props.from} {props.from !== props.to && (<>- {props.to}</>)}
          </time>
          <span className={style.role}>{props.role}</span>
          <address>{props.location}</address>
        </aside>
        {props.children}
      </div>
    </article>
  );
}