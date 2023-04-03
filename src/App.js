import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
/* import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup"; */
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import Analysis from "./components/Analysis";
import Report from "./components/Report";

function App() {
  return (
    <div className="screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/analysis" element={<Analysis />} />
          <Route exact path="/report" element={<Report />} />
          {/* <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/registration" element={<RegistrationForm />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
