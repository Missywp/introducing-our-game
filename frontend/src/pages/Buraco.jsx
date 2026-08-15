import { Link } from "react-router-dom";

export default function Buraco() {
  return (
    <div>
      <Link to="/fases" className="btn-pill" style={{ marginBottom: "2rem" }}>
        ← Voltar para Fases
      </Link>

      <div
        className="section-heading"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        <h2>Buraco negro </h2>
      </div>

      <div className="video-box">
        <video controls>
          <source src="/videos/Buraco.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="glass-grid" style={{ marginTop: "2.5rem" }}>
        <div className="glass-card">
          <span className="card-tag">Design</span>
          <p>Simulando plataformas gravitacionas e uma onda escura pairando.</p>
        </div>
        <div className="glass-card">
          <span className="card-tag">Mecânicas</span>
          <p>Plataformas flutuantes que despencam, reiniciando a fase.</p>
        </div>
      </div>
    </div>
  );
}
