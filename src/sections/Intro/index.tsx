import classNames from "classnames";

import { descriptions } from "@core";

import style from "./style.module.css";
import section from "../section.module.css";

export function Intro() {
  return (
    <div className={classNames(section.container, style.container)}>
      <div className={style.intro}>
        <p className={style.hello}>
          Hello, my name is
        </p>
        <h1 className="stop">Steve McKeogh</h1>
        <p className={style.desc}>
          {descriptions.long}
        </p>
        <ul className={style.social}>
          <li><a href="https://www.linkedin.com/in/thekeogh/" target="_blank" className={style.link}>LinkedIn</a></li>
          <li><a href="https://github.com/thekeogh" target="_blank" className={style.link}>GitHub</a></li>
          <li><a href="/download" className={style.link}>Download CV</a></li>
        </ul>
      </div>
      <div className={style.photo} />
    </div>
  );
}
