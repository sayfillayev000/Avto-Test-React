import "./App.scss";
import { Route, Routes, } from "react-router-dom";
import { Error, Home, RondomQuiz, Test } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biletlar" element={<Test />} />
      <Route path="/mavzular" element={<Test />} />
      <Route path="/exam" element={<RondomQuiz />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;