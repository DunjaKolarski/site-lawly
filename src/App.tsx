import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BecomeConsultant from "./pages/BecomeConsultant";
import LogIn from "./pages/LogIn";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/become-consultant" element={<BecomeConsultant />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;
