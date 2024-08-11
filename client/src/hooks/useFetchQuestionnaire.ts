import { api } from "@/axios";
import { QuestionnaireResponse, QuestionnaireType } from "@/types/index";
import { useState } from "react";

const useFetchQuestionnaire = () => {
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<QuestionnaireType | null>(null);

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

  return {
    loading,
    questions,
    fetchQuestions,
  };
};

export default useFetchQuestionnaire;
