import { Schema, Document } from "mongoose";

type QuestionType =
  | "boolean"
  | "scale"
  | "chips"
  | "multiple-choice"
  | "multiple-choice-img"
  | "open-ended";

export interface IQuestionOption {
  text: string;
  imageUrl?: string;
}

export interface IQuestion extends Document {
  questionText: string;
  type: QuestionType;
  options?: IQuestionOption[];
  createdAt: Date;
}

export const QuestionSchema: Schema<IQuestion> = new Schema({
  questionText: { type: String, required: true },
  type: {
    type: String,
    enum: ["boolean", "scale", "chips", "multiple-choice", "multiple-choice-img", "open-ended"],
    required: true,
  },
  options: [
    {
      text: { type: String, required: true },
      imageUrl: { type: String },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});
