import useUpdatePage from "@/hooks/useUpdatePage";
import { AnswerType, QuestionnaireType } from "@/types/index";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import Question from "./Question";
import { useState } from "react";
import { api } from "@/axios";
import { useNavigate } from "react-router-dom";
import MultiStepLoader from "../loaders/MultiStep";
import { Progress } from "../ui/progress";
import nodata from "@/assets/images/image.png";

interface QuestionListProps {
  data: QuestionnaireType;
  totalQuestions: number;
}

const QuestionList = ({ data, totalQuestions }: QuestionListProps) => {
  if (
    !data.sections ||
    data.sections.length === 0 ||
    !data.sections[0].questions ||
    data.sections[0].questions.length === 0
  ) {
    return (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 flex flex-col justify-center items-center gap-4"
      >
        <img src={nodata} alt="No Data" className="w-20 h-20" />
        <h1 className="text-2xl">No Questions</h1>
      </motion.div>
    );
  }

  const {
    currentQuestion,
    currentQuestionIndex,
    currentSection,
    currentSectionIndex,
    handleNext,
    handlePrevious,
    currentCount,
  } = useUpdatePage(data);

  const navigate = useNavigate();

  const [answers, setAnswers] = useState<AnswerType[]>([
    {
      question: "What is your age?",
      answer: 20,
    },
  ]);

  const [isPending, setIsPending] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setTimeout(async () => {
        try {
          setIsPending(true);
          const response = await api.post("/ai", { answers });
          navigate("/recommendations", { state: { moods: response.data.data } });
        } catch (error) {
          console.error("Submission failed:", error);
        } finally {
          setIsPending(false);
          setIsSubmitting(false);
        }
      }, 1000);
    } catch (error) {
      console.error("Submission failed:", error);
      setIsSubmitting(false);
    }
  };

  const isLastQuestion =
    currentSectionIndex === data.sections.length - 1 &&
    currentQuestionIndex === currentSection!.questions.length - 1;

  const isNextSectionEmpty =
    currentQuestionIndex === currentSection!.questions.length - 1 &&
    currentSectionIndex < data.sections.length - 1 &&
    data.sections[currentSectionIndex + 1].questions.length === 0;

  if (isPending) {
    return <MultiStepLoader loading={isPending} />;
  }

  return (
    <>
      <Progress value={(currentCount / totalQuestions) * 100} className="rounded-none h-1" />
      <div className="flex-1 flex flex-col items-center justify-around">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex + currentSectionIndex}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center w-full"
          >
            <Question
              question={currentQuestion!}
              setAnswers={setAnswers}
              currentCount={currentCount}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-around w-full mt-4">
          <Button
            onClick={handlePrevious}
            disabled={currentSectionIndex === 0 && currentQuestionIndex === 0}
            className="bg-white text-black hover:bg-transparent px-8 py-6 border-2"
          >
            Previous
          </Button>

          <Button
            onClick={isLastQuestion || isNextSectionEmpty ? () => handleSubmit() : handleNext}
            className="px-8 py-6 bg-[#3a7bf7]"
          >
            {isLastQuestion || isNextSectionEmpty
              ? isSubmitting
                ? "Submitting..."
                : "Submit"
              : "Continue"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
