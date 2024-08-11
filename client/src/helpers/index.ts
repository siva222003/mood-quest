import { AnswerType, QuestionType } from "@/types";

export const updateAnswers = (
  prev: AnswerType[],
  question: QuestionType,
  ans: string | number | string[]
) => {
  const updatedAnswers = prev.map((answer) =>
    answer.question === question.questionText ? { ...answer, answer: ans } : answer
  );

  if (!prev.some((answer) => answer.question === question.questionText)) {
    updatedAnswers.push({
      question: question.questionText,
      answer: ans,
    });
  }

  return updatedAnswers;
};
