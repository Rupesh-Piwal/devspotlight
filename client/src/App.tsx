import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import UploadProject from "./pages/upload-project";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload-project" element={<UploadProject />} />
      </Routes>
    </Router>
  );
};

export default App;
