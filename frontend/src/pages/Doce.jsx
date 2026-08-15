import { Link } from "react-router-dom";

export default function Doce() {
  return (
    <div>
      <Link to="/fases" className="btn-pill" style={{ marginBottom: "2rem" }}>
        ← Voltar para Fases
      </Link>

      <div
        className="section-heading"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        <h2>Mundo Doce </h2>
      </div>

      <div className="video-box">
        <video controls>
          <source src="/videos/Doce.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glass-grid" style={{ marginTop: "2.5rem" }}>
        <div className="glass-card">
          <span className="card-tag">Design</span>
          <p>
            Simulando um ambiente feito totalmente de deces, desde as árvores
            até os obstáculos, utilizando cores vivas.
          </p>
        </div>
        <div className="glass-card">
          <span className="card-tag">Mecânica</span>
          <p>
            Paredes que se movem e obstáculos rápidos que reiniciam a partida
            caso encoste.
          </p>
        </div>
      </div>
    </div>
  );
}
