import QuestionnaireLoader from "@/components/loaders/QuestionnaireLoader";
import useFetchQuestionnaires from "@/hooks/useFetchQUestionnaires";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const QuestionnaireList = () => {
  const { loading, questionnaires } = useFetchQuestionnaires();

  const colors = ["#eceff8", "#f7ecf9", "#f8ecec", "#eef8ef"];

  if (loading) {
    return <QuestionnaireLoader />;
  }

  return (
    <div className="flex flex-col h-full  justify-center items-center bg-[#eceff8]">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border rounded-lg py-4 px-8 border-gray-300"
      >
        <h1 className="text-2xl my-3 font-semibold">Questionnaires</h1>

        {questionnaires?.map((questionnaire, index) => (
          <Link to={`/questionnaire/${questionnaire._id}`} key={questionnaire._id}>
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.93 }}
              className="px-4 py-3 shadow-md rounded-lg flex items-center my-4 cursor-pointer bg-white gap-4"
            >
              <div className={`px-8 py-6 rounded-md bg-[${colors[index % 4]}]`}>{index + 1}</div>
              <h1 className="text-xl">{questionnaire.title}</h1>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default QuestionnaireList;
