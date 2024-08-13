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

type Selected = number | number[] | "true" | "false" | null;

export const updateLocalStorage = (question: QuestionType, selected: Selected) => {
  const prev = localStorage.getItem("selected");
  const updated = prev ? JSON.parse(prev) : [];

  if (selected !== null) {
    const existingIndex = updated.findIndex((item: any) => item.question === question.questionText);

    if (existingIndex !== -1) {
      updated[existingIndex] = {
        question: question.questionText,
        answer: selected,
      };
    } else {
      updated.push({
        question: question.questionText,
        answer: selected,
      });
    }

    localStorage.setItem("selected", JSON.stringify(updated));
    return null;
  } else {
    const existingItem = updated.find((item: any) => item.question === question.questionText);
    return existingItem ? existingItem.answer : null;
  }
};
