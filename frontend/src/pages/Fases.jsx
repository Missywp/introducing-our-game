import { Link } from "react-router-dom";

export default function Fases() {
  return (
    <div>
      {/* Botão Voltar */}
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
        <Link to="/" className="btn-voltar">
          &lt; Voltar
        </Link>
      </div>

      {/* Visão Geral (Agora com Vídeo) */}
      <div className="section-heading-pixel">
        <h2>Gameplay Geral</h2>
      </div>

      <div className="overview-container">
        <video className="overview-video" controls muted autoPlay loop>
          <source src="/videos/Geral.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>

      {/* Título Fases */}
      <div className="section-heading-pixel" style={{ marginTop: "4rem" }}>
        <h2>Fases</h2>
      </div>

      {/* Grid de Fases */}
      <div className="fases-grid-new">
        {/* Card Lobby */}
        <Link to="/fases/lobby" className="fase-card-new">
          <img src="/lobby.png" alt="Lobby" className="fase-card-img" />
          <div className="fase-card-text">Lobby</div>
        </Link>

        {/* Card Fase 1 */}
        <Link to="/fases/terror" className="fase-card-new">
          <img src="/fase-terror.png" alt="Fase 1" className="fase-card-img" />
          <div className="fase-card-text">Fase 1</div>
        </Link>

        {/* Card Fase 2 */}
        <Link to="/fases/doce" className="fase-card-new">
          <img src="/mundo_doces.png" alt="Fase 2" className="fase-card-img" />
          <div className="fase-card-text">Fase 2</div>
        </Link>

        {/* Card Fase 3 */}
        <Link to="/fases/water" className="fase-card-new">
          <img
            src="/fase-aquatica.png"
            alt="Fase 3"
            className="fase-card-img"
          />
          <div className="fase-card-text">Fase 3</div>
        </Link>

        {/* Card Fase 4 */}
        <Link to="/fases/buraco" className="fase-card-new">
          <img src="/fase-buraco.png" alt="Fase 4" className="fase-card-img" />
          <div className="fase-card-text">Fase 4</div>
        </Link>

        {/* Card Fase 5 */}
        <Link to="/fases/labirinto" className="fase-card-new">
          <img
            src="/fase-labirinto.png"
            alt="Fase 5"
            className="fase-card-img"
          />
          <div className="fase-card-text">Fase 5</div>
        </Link>
      </div>
    </div>
  );
}
