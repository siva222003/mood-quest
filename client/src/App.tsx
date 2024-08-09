import { Route, Routes } from "react-router-dom";
import Footer from "./components/home/Footer";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Questionnaire from "./pages/Questionnaire";

function App() {
  return (
    <main className="font-primary">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/questionnaire" element={<Questionnaire />} />

      </Routes>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
