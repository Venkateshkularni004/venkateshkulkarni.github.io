import classNames from "classnames";

import imgBackend from "@public/icon-backend.svg";
import imgFrontend from "@public/icon-frontend.svg";

import { About } from "@components";

import style from "./style.module.css";
import section from "../section.module.css";

export function Who() {
  return (
    <div className={classNames(section.container, style.container)}>
      <div className={style.grid}>
        <div className={style.left}>
          <About highlighted title="Frontend" icon={imgFrontend} className={style.about}>
            <p>Frontend development has always held a special place in my heart. It allows me to bring creative visions to life and create user experiences that leave a lasting impact. Working with technologies like React, I enjoy crafting beautiful and intuitive interfaces that captivate users.</p>
          </About>
          <About highlighted title="Backend" icon={imgBackend} className={style.about}>
            <p>While frontend development excites me, I have a strong inclination towards backend development, as it allows me to delve into the core functionality of an application, shaping its logic and powering its capabilities. With expertise in technologies like Node.js and PostgreSQL, I specialise in developing performant and secure backend solutions that meet modern application needs.</p>
          </About>
        </div>
        <div className={style.right}>
          <About title="Who" className={style.about}>
            <p className={style.highlight}>I am Steve McKeogh, a seasoned Full Stack Staff Software Engineer with extensive expertise spanning over two decades in the industry. My primary focus lies in Node.js, TypeScript, PostgreSQL, GraphQL, and React, but my skill set extends far beyond these technologies. Feel free to explore my abilities for further details or view my curriculum vitae.</p>
            <p>My journey in the software engineering field commenced in 1999 when I took my first steps as a junior web developer. Through years of dedication, perseverance, and continuous learning, I have steadily progressed to my current role as a full stack staff software engineer. The wealth of experience I have accumulated over the years has equipped me with a deep understanding of industry best practices, efficient development methodologies, and the ability to tackle complex challenges head-on.</p>
            <p>Presently, I am based in my quaint hometown of London, England. However, I cherished four wonderful years in Asia when I relocated to Bangkok, Thailand, in 2018.</p>
          </About>
        </div>
      </div>
    </div>
  );
}
