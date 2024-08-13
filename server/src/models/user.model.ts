import { Document, model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name?: string;
  age?: number;
  gender?: string;
  email: string;
  password: string;
  correctPassword: (password: string, enteredPassword: string) => Promise<boolean>;
}

export const userSchema = new Schema<IUser>({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.correctPassword = async (password: string, enteredPassword: string) => {
  const match = await bcrypt.compare(enteredPassword, password);
  return match;
};
