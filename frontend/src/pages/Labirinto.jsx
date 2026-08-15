import { Link } from "react-router-dom";

export default function Labirinto() {
  return (
    <div>
      <Link to="/fases" className="btn-pill" style={{ marginBottom: "2rem" }}>
        ← Voltar para Fases
      </Link>

      <div
        className="section-heading"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        <h2>Labirinto de Pedras </h2>
      </div>

      <div className="video-box">
        <video controls>
          <source src="/videos/Labirinto.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glass-grid" style={{ marginTop: "2.5rem" }}>
        <div className="glass-card">
          <span className="card-tag">Design</span>
          <p>
            Muros de pedras com baixa visibilidade, chão de terra e distorção de
            tamanho.
          </p>
        </div>
        <div className="glass-card">
          <span className="card-tag">Mecânica</span>
          <p>
            Visão limitada e obstáculos ativados ao toque, obrigando o jogador a
            reiniciar a partida e aumentando o tamanho do jogador, dificultando
            passagem.
          </p>
        </div>
      </div>
    </div>
  );
}
