import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from "./pages/landingpage";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
