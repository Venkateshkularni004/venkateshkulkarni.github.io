/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
import Script from "next/script";

import style from "./style.module.css";

export default function Page() {
  return (
    <main className={style.container}>
      The CV should download automatically within a few seconds. If this doesn't happen, <a href="/venkatesh Kulkarni cv.pdf">click here</a> to download manually.
      <Script id="download">
        {`setTimeout(() => window.location.replace("/venkatesh Kulkarni cv.pdf"), 1000)`}
      </Script>
    </main>
  );
}
