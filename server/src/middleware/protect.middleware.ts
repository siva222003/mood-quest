import jwt from "jsonwebtoken";
import { ApiError } from "../utils/api-error";
import { asyncHandler } from "../utils/async-handler";
import { IJWT_PAYLOAD } from "../types";
import { env } from "../config/config";
import { userService } from "../config/injection";

export const verify = asyncHandler(async (req, res, next) => {
  const webToken = req.headers.auth as string;
  const JWT_SECRET = env.JWT_SECRET;

  if (!webToken) {
    throw ApiError.badRequest("Token not provided");
  }

  const [bearer, token] = webToken.split(" ");

  if (bearer !== "Bearer" || !token) {
    throw ApiError.badRequest("Invalid token format");
  }

  const decoded = jwt.verify(token, JWT_SECRET);

  if (!decoded) {
    throw ApiError.unauthorized("Invalid token");
  }

  const decodedUser = decoded as IJWT_PAYLOAD;

  const user = await userService.getUserById(decodedUser.id);

  if (!user) {
    throw ApiError.notFound("User not found");
  }

  req.id = user.id;
  next();
});
