import { QuestionnaireType } from "../types/index";
import { useState } from "react";

const useUpdatePage = (data: QuestionnaireType | null) => {
  if (!data) {
    return {
      currentSectionIndex: 0,
      currentQuestionIndex: 0,
      currentSection: null,
      currentQuestion: null,
      handleNext: () => {},
      handlePrevious: () => {},
    };
  }

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentSection = data.sections[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < data.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentQuestionIndex(data.sections[currentSectionIndex - 1].questions.length - 1);
    }
  };

  return {
    currentSectionIndex,
    currentQuestionIndex,
    currentSection,
    currentQuestion,
    handleNext,
    handlePrevious,
  };
};

export default useUpdatePage;
