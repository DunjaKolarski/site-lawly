import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BecomeConsultant from "./pages/BecomeConsultant";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Support from "./pages/Support";
import Events from "./pages/Events";
import EventsDetails from "./pages/EventsDetails";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/become-consultant" element={<BecomeConsultant />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/support" element={<Support />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:eventId" element={<EventsDetails />} />
      <Route path="/events/:eventId/past" element={<EventsDetails isPast />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:articleId" element={<Article />} />
    </Routes>
  );
}

export default App;
