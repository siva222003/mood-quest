import MultiStepLoader from "@/components/loaders/MultiStep";
// import Header from "@/components/questionnaire/Header";
import QuestionList from "@/components/questionnaire/QuestionList";

import useFetchQuestionnaire from "@/hooks/useFetchQuestionnaire";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Questionnaire = () => {
  const { loading, questions, fetchQuestions } = useFetchQuestionnaire();

  // const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) {
    // return <div>Loading...</div>;
    return <MultiStepLoader loading={loading} />;
  }

  if (!questions) {
    return <div>Something went wrong </div>;
  }

  return (
    <section className="flex min-h-screen h-screen">
      <div className="bg-[#f9fafc] flex flex-col flex-1">
        {/* <Header /> */}

        <Link to="/" className="mx-5 my-3">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-auto"
          />
        </Link>

        <QuestionList data={questions} />
      </div>
    </section>
  );
};

export default Questionnaire;
