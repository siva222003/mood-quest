export {};
declare global {
  namespace Express {
    export interface Request {
      authenticated?: boolean;
    }
  }
}
