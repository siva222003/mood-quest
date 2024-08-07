import { Schema, Document } from "mongoose";

type QuestionType = "text" | "boolean" | "slider" | "multiple-choice" | "open-ended";

export interface IQuestion extends Document {
  questionText: string;
  type: QuestionType;
  options?: string[];
}

export const QuestionSchema: Schema<IQuestion> = new Schema({
  questionText: { type: String, required: true },
  type: {
    type: String,
    enum: ["text", "boolean", "slider", "multiple-choice", "open-ended"],
    required: true,
  },
  options: [String],
});
