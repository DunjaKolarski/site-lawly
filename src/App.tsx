import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BecomeConsultant from "./pages/BecomeConsultant";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/become-consultant" element={<BecomeConsultant />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
