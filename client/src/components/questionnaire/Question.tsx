import { AnswerType, QuestionEnum, QuestionType } from "@/types";
import Scale from "../questions/Scale";
import RadioOptions from "../questions/RadioOptions";
import ImageOptions from "../questions/ImageOptions";
import Boolean from "../questions/Boolean";
import Chips from "../questions/Chips";

interface QuestionProps {
  question: QuestionType;
  setAnswers: React.Dispatch<React.SetStateAction<AnswerType[]>>;
  currentQuestionIndex: number;
  currentSectionIndex: number;
}

const Question = ({
  question,
  setAnswers,
  currentQuestionIndex,
  currentSectionIndex,
}: QuestionProps) => {
  const element = (question: QuestionType) => {
    switch (question.type) {
      case QuestionEnum.BOOLEAN:
        return (
          <Boolean
            question={question}
            setAnswers={setAnswers}
            currentQuestionIndex={currentQuestionIndex}
            currentSectionIndex={currentSectionIndex}
          />
        );
      case QuestionEnum.SCALE:
        return (
          <Scale
            question={question}
            setAnswers={setAnswers}
            currentQuestionIndex={currentQuestionIndex}
            currentSectionIndex={currentSectionIndex}
          />
        );
      case QuestionEnum.CHIPS:
        return (
          <Chips
            question={question}
            setAnswers={setAnswers}
            currentQuestionIndex={currentQuestionIndex}
            currentSectionIndex={currentSectionIndex}
          />
        );
      case QuestionEnum.MULTIPLE_CHOICE:
        return (
          <RadioOptions
            question={question}
            setAnswers={setAnswers}
            currentQuestionIndex={currentQuestionIndex}
            currentSectionIndex={currentSectionIndex}
          />
        );
      case QuestionEnum.MULTIPLE_CHOICE_IMG:
        return <ImageOptions />;
      case QuestionEnum.OPEN_ENDED:
        return <div>Open Ended</div>;
      default:
        return <div>Default</div>;
    }
  };

  return <div className="flex flex-col items-center w-full">{element(question)}</div>;
};

export default Question;
