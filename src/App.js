import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Register from "./pages/register";
import History from "./pages/history";
import Pengaduantim from "./pages/pengaduantim";
import Pengaduananonymous from "./pages/pengaduananonymous";
import Halpeta from "./pages/halpeta";
import Admin from "./pages/admin/admin";
import "leaflet/dist/leaflet.css";
import Loginpage from "./pages/hallogin";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/history" element={<History />} />
          <Route path="/pengaduantim" element={<Pengaduantim />} />
          <Route path="/pengaduananonymous" element={<Pengaduananonymous />} />
          <Route path="/halpeta" element={<Halpeta />} />
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/admin/dasbor" element={<Admin />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
