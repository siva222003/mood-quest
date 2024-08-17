export enum QuestionEnum {
  BOOLEAN = "boolean",
  SCALE = "scale",
  CHIPS = "chips",
  MULTIPLE_CHOICE = "multiple-choice",
  MULTIPLE_CHOICE_IMG = "multiple-choice-img",
  OPEN_ENDED = "open-ended",
}

interface QuestionOption {
  text: string;
  imageUrl?: string;
}

export interface QuestionType {
  questionText: string;
  type: QuestionEnum;
  options?: QuestionOption[];
}

export interface SectionType {
  name: string;
  questions: QuestionType[];
}

export interface QuestionnaireType {
  _id: string;
  title: string;
  sections: SectionType[];
}

export interface QuestionnaireResponse {
  status: number;
  message: string;
  data: QuestionnaireType;
  success: boolean;
}

export interface AnswerType {
  question: string;
  answer: string | number | string[];
}

export interface RecommendationType {
  title: string;
  description: string;
  type: "podcast" | "video" | "blog";
  url: string;
  thumbnailUrl: string;
  tags: string[];
}

export interface User {
  _id: string;
  email: string;
  name: string;
  gender: string;
  age: number;
  createdAt: string;
}

export interface Questionnaires {
  _id: string;
  title: string;
  sections: string[];
  createdAt: string;
  updatedAt: string;
}

export interface QuestionnairesResponse {
  status: number;
  message: string;
  data: Questionnaires[];
  success: boolean;
}
