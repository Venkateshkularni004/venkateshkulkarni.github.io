/**
 * App configuration settings.
 */
export const config: App.Core.Config = {
  env: process.env.VERCEL_ENV,
  app: {
    url: process.env.APP_URL,
  },
};