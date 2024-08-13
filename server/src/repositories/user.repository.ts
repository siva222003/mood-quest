import { DbService } from "../config/db";
import { IUser } from "../models/user.model";

export class UserRepository {
  constructor(private readonly _db: DbService) {}

  async createUser(user: IUser) {
    const newUser = await this._db.userModel.create(user);
    return newUser;
  }

  async getAllUsers() {
    const users = await this._db.userModel.find();
    return users;
  }

  async getUserById(id: string): Promise<IUser | null> {
    const user = await this._db.userModel.findById(id);
    return user;
  }

  async getUserByEmail(email: string): Promise<IUser | null> {
    const user = await this._db.userModel.findOne({ email });
    return user;
  }
}
