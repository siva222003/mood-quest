export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static badRequest = (msg: string) => new ApiError(400, msg);

  static unauthorized = (msg: string) => new ApiError(401, msg);

  static forbidden = (msg: string) => new ApiError(403, msg);

  static notFound = (msg: string) => new ApiError(404, msg);

  static conflict = (msg: string) => new ApiError(409, msg);
}
