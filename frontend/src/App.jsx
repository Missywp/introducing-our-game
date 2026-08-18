import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Fases from "./pages/Fases";
import Labirinto from "./pages/Labirinto";
import Terror from "./pages/Terror";
import Doce from "./pages/Doce";
import Lobby from "./pages/Lobby";
import Water from "./pages/Water";
import Buraco from "./pages/Buraco";
import Geral from "./pages/Geral";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/fases" className="nav-link">
              Fases
            </NavLink>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fases" element={<Fases />} />
            <Route path="/fases/labirinto" element={<Labirinto />} />
            <Route path="/fases/water" element={<Water />} />
            <Route path="/fases/terror" element={<Terror />} />
            <Route path="/fases/lobby" element={<Lobby />} />
            <Route path="/fases/doce" element={<Doce />} />
            <Route path="/fases/buraco" element={<Buraco />} />
            <Route path="/fases/geral" element={<Geral />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
