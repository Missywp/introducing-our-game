import { Link } from "react-router-dom";

export default function Fases() {
  return (
    <div>
      <div className="section-heading">
        <h2>Gameplay Geral</h2>
      </div>

      <div className="glass-grid">
        <div className="glass-card-big">
          <div>
            <span className="card-tag">Todas as Fases</span>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/fases/geral" className="btn-pill">
              Jogo
            </Link>
          </div>
        </div>
        <div className="glass-card">
          <div>
            <span className="card-tag">Inicio</span>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/fases/lobby" className="btn-pill">
              Lobby
            </Link>
          </div>
        </div>

        <div className="glass-card">
          <div>
            <span className="card-tag">Fase 1</span>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/fases/terror" className="btn-pill">
              Plano de Terror
            </Link>
          </div>
        </div>
        <div className="glass-card">
          <div>
            <span className="card-tag">Fase 2</span>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/fases/doce" className="btn-pill">
              Mundo Doce
            </Link>
          </div>
        </div>
        <div className="glass-card">
          <div>
            <span className="card-tag">Fase 3</span>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/fases/water" className="btn-pill">
              Planeta Aquático
            </Link>
          </div>
        </div>
        <div className="glass-card">
          <div>
            <span className="card-tag">Fase 4</span>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/fases/buraco" className="btn-pill">
              Buraco negro
            </Link>
          </div>
        </div>
        <div className="glass-card">
          <div>
            <span className="card-tag">Fase 5</span>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/fases/labirinto" className="btn-pill">
              Labirinto de Pedras
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
