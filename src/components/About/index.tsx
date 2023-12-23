import classNames from "classnames";
import Image from "next/image";

import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  title: string;
  highlighted?: boolean;
  icon?: string;
  className?: string;
  "data-testid"?: string;
}

export function About(props: Props) {
  const className = classNames("__about", style.container, props.highlighted && style.highlighted, props.className);

  /**
   * Render the icon.
   * 
   * @remarks
   * Icons are not required, so we will return null in those cases.
   */
  const renderIcon = () => {
    if (!props.icon) {
      return null;
    }
    return <Image src={props.icon} alt={props.title} className={style.icon} height={80} />;
  };

  /**
   * Return the component.
   */
  return (
    <div data-testid={props["data-testid"]} className={className}>
      {renderIcon()}
      <h2 className={classNames(style.title, "stop")}>
        {props.title}
      </h2>
      <div className={style.content}>
        {props.children}
      </div>
    </div>
  );
}