import { Document, model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name?: string;
  age?: number;
  gender?: string;
  role: string;
  email: string;
  password: string;
  createdAt: () => number | string; 
  correctPassword: (password: string, enteredPassword: string) => Promise<boolean>;
}

export const userSchema = new Schema<IUser>({
  name: {
    required: true,
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
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
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (date: Date) {
      return (
        date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }) +
        " " +
        date.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    },
  },
});

userSchema.methods.correctPassword = async (password: string, enteredPassword: string) => {
  const match = await bcrypt.compare(enteredPassword, password);
  return match;
};
