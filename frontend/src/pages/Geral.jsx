import { Link } from "react-router-dom";

export default function Geral() {
  return (
    <div>
      <Link to="/fases" className="btn-pill" style={{ marginBottom: "2rem" }}>
        ← Voltar para Fases
      </Link>

      <div
        className="section-heading"
        style={{ textAlign: "left", marginTop: "1rem" }}
      ></div>

      <div className="video-box">
        <video controls>
          <source src="/videos/Geral.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
