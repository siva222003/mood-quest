import { isValidEmail } from "../helpers/validate";
import { IUser } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { ApiError } from "../utils/api-error";

export class UserService {
  constructor(private readonly _userRepo: UserRepository) {}

  async createUser(user: IUser) {
    const { name, email, password } = user;

    if (!email || !password) {
      throw ApiError.badRequest("Email and password are required");
    }

    if (!name) {
      throw ApiError.badRequest("Name is required");
    }

    if (!isValidEmail(email)) {
      throw ApiError.badRequest("Invalid email format");
    }

    const existingUser = await this._userRepo.getUserByEmail(user.email);

    if (existingUser) {
      throw ApiError.conflict("User already exists");
    }

    const newUser = await this._userRepo.createUser(user);
    return newUser;
  }

  async loginUser(email: string, password: string, role: "user" | "admin") {
    if (!email || !password) {
      throw ApiError.badRequest("Email and password are required");
    }

    if (!isValidEmail(email)) {
      throw ApiError.badRequest("Invalid email format");
    }

    const user = await this._userRepo.getUserByEmail(email);

    if (!user) {
      throw ApiError.notFound("User with this email does not exist");
    }

    if (!user.correctPassword(user.password, password)) {
      throw ApiError.unauthorized("Password is incorrect");
    }

    if (user.role !== role) {
      throw ApiError.unauthorized("You are not an admin");
    }

    return user;
  }

  async getAllUsers() {
    const users = await this._userRepo.getAllUsers();
    return users;
  }

  async getUserById(id: string) {
    const user = await this._userRepo.getUserById(id);
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this._userRepo.getUserByEmail(email);
    return user;
  }
}
