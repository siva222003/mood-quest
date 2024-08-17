import QuestionnaireLoader from "@/components/loaders/QuestionnaireLoader";
import QuestionList from "@/components/questionnaire/QuestionList";

import useFetchQuestionnaire from "@/hooks/useFetchQuestionnaire";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Questionnaire = () => {
  const { id } = useParams();

  const { loading, questions, totalQuestions } = useFetchQuestionnaire(id!);

  useEffect(() => {
    localStorage.removeItem("selected");
  }, []);

  if (loading) {
    return <QuestionnaireLoader />;
  }

  return <>{questions && <QuestionList data={questions} totalQuestions={totalQuestions} />}</>;
};

export default Questionnaire;
