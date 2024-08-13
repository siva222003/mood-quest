import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../config/config";
import { ApiError } from "./api-error";

export const genToken = (id: string) => {
  if (!id) {
    throw ApiError.forbidden("User ID is required to generate token");
  }

  const jwtOptions = {
    expiresIn: "7d",
  };
  const token = jwt.sign({ id }, env.JWT_SECRET, jwtOptions);
  return token;
};

export const genHash = async (field: string) => {
  const hashedField = await bcrypt.hash(field, 12);
  return hashedField;
};
