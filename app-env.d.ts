/**
 * Represents the available environments in Vercel.
 * 
 * @remarks
 * The "test" environment is not automatically included in Vercel. However, we manually add it for our local tests.
 */
declare type VercelEnv = "production" | "preview" | "development" | "test";

declare namespace NodeJS {

  interface ProcessEnv {
    // Environment
    readonly VERCEL_ENV: VercelEnv;
    readonly NEXT_PUBLIC_VERCEL_ENV: VercelEnv;
    // App
    readonly APP_URL: string;
  }

}