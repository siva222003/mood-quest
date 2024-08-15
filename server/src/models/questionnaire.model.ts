import { Schema, Document } from "mongoose";

export interface IQuestionnaire extends Document {
  title: string;
  sections: Schema.Types.ObjectId[];
  createdAt: Date;
}

export const QuestionnaireSchema: Schema<IQuestionnaire> = new Schema(
  {
    title: { type: String, required: true },
    sections: [{ type: Schema.Types.ObjectId, ref: "Section" }],
    createdAt: { type: Date, default: Date.now },
  },
);
