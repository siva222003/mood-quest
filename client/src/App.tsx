import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Questionnaire from "./pages/Questionnaire";
import LoginModal from "./components/auth/LoginModal";
import RegisterModal from "./components/auth/RegisterModal";
import { useAuth } from "./context/AuthContext";
import QuestionnaireList from "./pages/QuestionnaireList";
import Profile from "./pages/Profile";

function App() {
  const { login, register } = useAuth();
  return (
    <main className="font-primary">
      {login && <LoginModal />}
      {register && <RegisterModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route
          path="*"
          element={
            <section className="flex flex-col min-h-screen h-screen">
              <div className="bg-[#f9fafc] flex flex-col flex-1">
                {/* <Header /> */}

                <Link to="/" className="p-3 pl-10 shadow-md rounded-lg">
                  <h1 className="text-3xl font-bold">Mood Quest</h1>
                </Link>

                <Routes>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/questionnaire" element={<QuestionnaireList />} />
                  <Route path="/questionnaire/:id" element={<Questionnaire />} />
                </Routes>
              </div>
            </section>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
