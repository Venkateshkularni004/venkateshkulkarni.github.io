import { Metadata } from "next";

import { config } from "@core";

/**
 * Shared variables.
 * 
 * @remarks
 * These variables are used in multiple places in the metadata to avoid repetition.
 */
const title = "Venkatesh kulkarni | Full Stack web devloper ,Software Engineer | Recent Information Science Graduate | Google Certified |Java, Python, C++ , Html ,css, php| Open to Opportunities| bangalore, India";
const colors = {
  primary: "#66bb6a",
};
export const descriptions = {
  short: "Passionate and experienced Full Stack web devloper, Software Engineer based in  bangalore. Specialising in HTML5, CSS3, JavaScript (ES6+), Responsive Design, UI/UX Design Principles, Frameworks (React, Angular, Vue).",
  long: "Seasoned Full Stack web devloper, Software Engineerwith over 1 year of expertise. Specialising in Node.js, Django/Flask (Python), Java (Spring Boot), .NET, Ruby on Rails, with a well-rounded skill set for innovative software solutions.",
};

/**
 * App metadata.
 * 
 * @remarks
 * The metadata object is exported directly to the app layout for Next.js to compile into the <head>.
 */
export const metadata: Metadata = {
  title,
  description: descriptions.short,
  keywords: ["Full Stack web devloper", " software engineer", "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "UI/UX Design Principles", "Frameworks (React, Angular, Vue)","Node.js"," Django/Flask (Python)"," Java (Spring Boot)","NET"," Ruby on Rails"];
  authors: { name: "Venkatesh kulkarni" },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
  },
  metadataBase: new URL(config.app.url),
  alternates: {
    canonical: "/",
  },
  applicationName: title,
  colorScheme: "dark",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: colors.primary,
  openGraph: {
    siteName: title,
    type: "website",
    locale: "en_GB",
    alternateLocale: "en_US",
    url: config.app.url,
    title,
    description: descriptions.long,
  },
  appleWebApp: {
    title,
  },
  manifest: "/manifest.json",
};