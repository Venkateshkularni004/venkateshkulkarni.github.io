import { MetadataRoute } from "next";
 
import { config } from "@core";

export default function robots(): MetadataRoute.Robots {
  if (config.env !== "production") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mckeogh.uk/sitemap.xml",
  };
}