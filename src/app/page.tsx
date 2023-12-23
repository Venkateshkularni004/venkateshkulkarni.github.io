import { date } from "@utils";

import { Profile } from "@components";

import * as Sections from "@sections";

import style from "./style.module.css";

export default function Page() {
  return (
    <>
      <header className={style.header}>
        <Profile title="Name">
          venkatesh kulkarni
        </Profile>
        <Profile title="Role">
          web developer 
        </Profile>
        <Profile title="Experience">
          {date.getYears(new Date("2023-01-01"))} Years
        </Profile>
        <Profile title="Location">
        bangalore, India
        </Profile>
        <Profile title="Email">
          Venkateshkulkarni004@gmail.com
        </Profile>
        <Profile title="Phone">
          +91 9113252592
        </Profile>
        <Profile title="Date of Birth">
          27th October 1998
        </Profile>
        <Profile title="whatapp Number">
        +91 9980957327
        </Profile>
        <Profile title="Open to work">
          Yes
        </Profile>
        <a href="/download" className={style.button}>
          Download CV
        </a>
      </header>
      <main>
        <Sections.Intro />
        <Sections.Who />
        <Sections.Skills />
        <Sections.Experience />
      </main>
    </>
  );
}
