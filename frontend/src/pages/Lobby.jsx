import { Link } from "react-router-dom";

export default function Lobby() {
  return (
    <div>
      <Link to="/fases" className="btn-pill" style={{ marginBottom: "2rem" }}>
        ← Voltar para Fases
      </Link>

      <div
        className="section-heading"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        <h2>Inicio </h2>
      </div>

      <div className="video-box">
        <video controls>
          <source src="/videos/Lobby.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glass-grid" style={{ marginTop: "2.5rem" }}>
        <div className="glass-card">
          <span className="card-tag">Design</span>
          <p>
            Design feito para simular o lobby de uma nave espacial, ambiente com
            visual tecnológico e futurista.
          </p>
        </div>
        <div className="glass-card">
          <span className="card-tag">Mecânica</span>
          <p>
            Detecta presença do personagem ao colidir com o bloco, a porta se
            abre e o jogador é levado as fases.
          </p>
        </div>
      </div>
    </div>
  );
}
