declare namespace App {
  namespace Core {

    interface Config {
      env: VercelEnv;
      app: {
        url: string;
      };
    }

  }
}