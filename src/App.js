import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from "./pages/landingpage";
import Login from "./pages/login";
import Register from "./pages/register";
import History from "./pages/history";
import Pengaduan from "./pages/pengaduan";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/history" element={<History />} />
          <Route path="/pengaduan" element={<Pengaduan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
