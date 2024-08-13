import { api } from "@/axios";
import { QuestionnaireResponse, QuestionnaireType } from "@/types/index";
import { useEffect, useState } from "react";

const useFetchQuestionnaire = () => {
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<QuestionnaireType | null>(null);
  const [totalQuestions, setTotalQuestions] = useState(0);

  // const [answers, setAnswers] = useState<any>({});

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await api.get<QuestionnaireResponse | null>(
        "question/questionnaire/66b6d29c3025c3f9a687f020"
      );

      if (!response.data) {
        throw new Error("No data found");
      }
      setQuestions(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setTotalQuestions(countTotalQuestions());
  }, [questions]);

  const countTotalQuestions = (): number => {
    if (!questions) return 0;

    const final = questions.sections.reduce((total, section) => {
      return total + section.questions.length;
    }, 0);

    return final;
  };

  return {
    loading,
    questions,
    totalQuestions,
  };
};

export default useFetchQuestionnaire;
