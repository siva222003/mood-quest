import { STATUS_CODES } from "../helpers/constants";

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static badRequest = (msg: string) => new ApiError(STATUS_CODES.BAD_REQUEST, msg);

  static unauthorized = (msg: string) => new ApiError(STATUS_CODES.UNAUTHORIZED, msg);

  static forbidden = (msg: string) => new ApiError(STATUS_CODES.FORBIDDEN, msg);

  static notFound = (msg: string) => new ApiError(STATUS_CODES.NOT_FOUND, msg);

  static conflict = (msg: string) => new ApiError(STATUS_CODES.CONFLICT, msg);
}
