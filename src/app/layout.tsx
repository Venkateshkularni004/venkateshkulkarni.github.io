import { Analytics } from "@vercel/analytics/react";

import "@src/css/global.css";
import "@src/css/utilities.css";

import { fonts } from "@core";

export { metadata } from "@core";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en-GB" className={`${fonts.rubik.variable} ${fonts.futura.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
