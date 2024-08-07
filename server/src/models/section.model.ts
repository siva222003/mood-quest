import { Schema, Document } from "mongoose";

export interface ISection extends Document {
  name: string;
  questions: Schema.Types.ObjectId[];
}

export const SectionSchema: Schema<ISection> = new Schema({
  name: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});
