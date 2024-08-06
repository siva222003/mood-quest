declare global {
  namespace Express {
    interface Request {
      /** Indicates whether the user is authenticated on Firebase Authentication */
      authenticated: boolean;

      /** If authenticated: Contains user data of Firebase Authentication.  */
      auth?: string;
    }
  }
}
