import { api } from "@/axios";
import { Questionnaires, QuestionnairesResponse } from "@/types/index";
import { useEffect, useState } from "react";

const useFetchQuestionnaires = () => {
  const [loading, setLoading] = useState(true);

  const [questionnaires, setQuestionnaires] = useState<Questionnaires[] | null>(null);

  const fetchQuestionnaires = async () => {
    setLoading(true);
    try {
      const response = await api.get<QuestionnairesResponse | null>("/questionnaire");

      if (!response.data) {
        throw new Error("No data found");
      }
      setQuestionnaires(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestionnaires();
  }, []);

  return {
    loading,
    questionnaires,
  };
};

export default useFetchQuestionnaires;
