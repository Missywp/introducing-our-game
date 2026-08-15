import { Link } from "react-router-dom";

export default function Terror() {
  return (
    <div>
      <Link to="/fases" className="btn-pill" style={{ marginBottom: "2rem" }}>
        ← Voltar para Fases
      </Link>

      <div
        className="section-heading"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        <h2> Plano de Terror </h2>
      </div>

      <div className="video-box">
        <video controls>
          <source src="/videos/Terror.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glass-grid" style={{ marginTop: "2.5rem" }}>
        <div className="glass-card">
          <span className="card-tag">Design</span>
          <p>Simulando um cemitério, ambiente mais escuro e sinistro</p>
        </div>
        <div className="glass-card">
          <span className="card-tag">Mêcanica</span>
          <p>
            Ao colidir com objetos, o jogador é obrigado a reiniciar a partida,
            caso encoste em determinado objeto, o jogo dificulta, aumentando o
            tamanho do personagem
          </p>
        </div>
      </div>
    </div>
  );
}
