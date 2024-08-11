import useUpdatePage from "@/hooks/useUpdatePage";
import { AnswerType, QuestionnaireType } from "@/types/index";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import Question from "./Question";
// import { api } from "@/axios"; 
import { useEffect, useState } from "react";

interface QuestionListProps {
  data: QuestionnaireType;
}

const QuestionList = ({ data }: QuestionListProps) => {
  const {
    currentQuestion,
    currentQuestionIndex,
    currentSection,
    currentSectionIndex,
    handleNext,
    handlePrevious,
  } = useUpdatePage(data);


  const [answers, setAnswers] = useState<AnswerType[]>([
    {
      question: "What is you age?",
      answer: 20,
    },
  ]);

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const handleSubmit = async () => {
    // try {
    //   const response = await api.post("/your-submit-endpoint", {
    //     // Include the data you want to submit
    //     answers: {}, // Replace with your actual answers data
    //   });
    //   console.log("Submission successful:", response.data);
    //   // Handle successful submission (e.g., show a success message, navigate to another page)
    // } catch (error) {
    //   console.error("Submission failed:", error);
    //   // Handle errors (e.g., show an error message)
    // }

    console.log(answers);
  };

  const isLastQuestion =
    currentSectionIndex === data.sections.length - 1 &&
    currentQuestionIndex === currentSection!.questions.length - 1;

  return (
    <div className="flex-1 flex flex-col items-center justify-around">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIndex + currentSectionIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          <Question question={currentQuestion!} setAnswers={setAnswers} />
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
          onClick={isLastQuestion ? handleSubmit : handleNext}
          className="px-8 py-6 bg-[#3a7bf7]"
        >
          {isLastQuestion ? "Submit" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default QuestionList;
