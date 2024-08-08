import { NextFunction, Request, Response } from "express";

type FN = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const asyncHandler = (fn: FN) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};
