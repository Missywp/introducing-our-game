import { Link } from "react-router-dom";

export default function Water() {
  return (
    <div>
      <Link to="/fases" className="btn-pill" style={{ marginBottom: "2rem" }}>
        ← Voltar para Fases
      </Link>

      <div
        className="section-heading"
        style={{ textAlign: "left", marginTop: "1rem" }}
      >
        <h2>Planeta Aquático </h2>
      </div>

      <div className="video-box">
        <video controls>
          <source src="/videos/Water.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="glass-grid" style={{ marginTop: "2.5rem" }}>
        <div className="glass-card">
          <span className="card-tag">Design</span>
          <p>
            Iluminação abafada, ambientado em uma piscina, simulando a sensação
            de mergulho.
          </p>
        </div>
        <div className="glass-card">
          <span className="card-tag">Mecânicas</span>
          <p>
            Plataformas flutuantes que afundam ao toque, junto com o joogador,
            mecanica de restaurar a posição para caso afunde.
          </p>
        </div>
      </div>
    </div>
  );
}
