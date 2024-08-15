import { Schema, Document } from "mongoose";

export interface ISection extends Document {
  name: string;
  questions: Schema.Types.ObjectId[];
  createdAt: Date;
}

export const SectionSchema = new Schema({
  name: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  createdAt: { type: Date, default: Date.now },
});
