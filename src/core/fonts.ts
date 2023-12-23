import { Rubik } from "next/font/google";
import localFont from "next/font/local";

/**
 * Rubik.
 * 
 * @label Google Font
 * 
 * @remarks
 * This font is used for titles throughout the website and is sourced from Google Fonts.
 */
const rubik = Rubik({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

/**
 * Futura PT Web.
 * 
 * @label Local Font
 * 
 * @remarks
 * This font is utilised for all text displayed on the site, excluding titles.
 */
const futura = localFont({
  src: [{
    path: "../fonts/FuturaPT/300.woff2",
    weight: "300",
    style: "normal",
  }, {
    path: "../fonts/FuturaPT/300-Italic.woff2",
    weight: "300",
    style: "italic",
  }, {
    path: "../fonts/FuturaPT/400.woff2",
    weight: "400",
    style: "normal",
  }, {
    path: "../fonts/FuturaPT/400-Italic.woff2",
    weight: "400",
    style: "italic",
  }, {
    path: "../fonts/FuturaPT/700.woff2",
    weight: "700",
    style: "normal",
  }, {
    path: "../fonts/FuturaPT/700-Italic.woff2",
    weight: "700",
    style: "italic",
  }],
  variable: "--font-futura",
});

export const fonts = { rubik, futura };