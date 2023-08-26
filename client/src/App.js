import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Choose from "./components/Choose";
import CrudComponent from "./components/CrudComponent";

function App() {
  return (
    <Router>
      <Choose />
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/crudui" element={<CrudComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
