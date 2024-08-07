import mongoose from "mongoose";
import { env } from "./config";

export class DbService {
  private readonly _db: mongoose.Connection;

  constructor() {
    this._db = mongoose.connection;
  }

  async connect() {
    await mongoose.connect(env.MONGO_URI);
    console.log("🎄 Database connected");
  }
}
