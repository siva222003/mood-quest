import { Schema, Document } from "mongoose";

export interface IQuestionnaire extends Document {
  title: string;
  sections: Schema.Types.ObjectId[];
}

export const QuestionnaireSchema: Schema<IQuestionnaire> = new Schema({
  title: { type: String, required: true },
  sections: [{ type: Schema.Types.ObjectId, ref: "Section" }],
});
