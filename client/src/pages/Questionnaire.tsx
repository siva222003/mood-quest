import QuestionnaireLoader from "@/components/loaders/QuestionnaireLoader";
// import Header from "@/components/questionnaire/Header";
import QuestionList from "@/components/questionnaire/QuestionList";

import useFetchQuestionnaire from "@/hooks/useFetchQuestionnaire";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Questionnaire = () => {
  const { loading, questions, totalQuestions } = useFetchQuestionnaire();

  useEffect(() => {
    localStorage.removeItem("selected");
  }, []);

  if (loading) {
    return <QuestionnaireLoader />;
  }

  console.log(questions)

  return (
    <>
      <section className="flex flex-col min-h-screen h-screen">
        <div className="bg-[#f9fafc] flex flex-col flex-1">
          {/* <Header /> */}

          <Link to="/" className="p-3 pl-10 shadow-md rounded-lg">
            {/* <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
          /> */}

            <h1 className="text-3xl font-bold">Mood Quest</h1>
          </Link>

          {questions && <QuestionList data={questions} totalQuestions={totalQuestions} />}
        </div>
      </section>
    </>
  );
};

export default Questionnaire;
