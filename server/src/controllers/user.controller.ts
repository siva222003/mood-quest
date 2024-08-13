import { userService } from "../config/injection";
import { STATUS_CODES } from "../helpers/constants";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../utils/api-response";
import { asyncHandler } from "../utils/async-handler";
import { genToken } from "../utils/gen";

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();

  res.json(new ApiResponse(STATUS_CODES.OK, "Users fetched successfully", users));
});

export const getUserById = asyncHandler(async (req, res) => {
  const id = req.id;

  if (!id) {
    throw ApiError.badRequest("User ID is required");
  }

  const user = await userService.getUserById(id);

  if (!user) {
    throw new ApiError(STATUS_CODES.NOT_FOUND, "User not found");
  }

  res.json(new ApiResponse(STATUS_CODES.OK, "User fetched successfully", user));
});

export const createUser = asyncHandler(async (req, res) => {
  const user = req.body;

  const newUser = await userService.createUser(user);

  const token = genToken(newUser.id);

  res.json(
    new ApiResponse(STATUS_CODES.CREATED, "User created successfully", { user: newUser, token })
  );
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.loginUser(email, password);

  const token = genToken(user.id);

  res.json(new ApiResponse(STATUS_CODES.OK, "User logged in successfully", { user, token }));
});
