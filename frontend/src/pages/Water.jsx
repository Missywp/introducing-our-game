import { Link } from "react-router-dom";

export default function Water() {
  return (
    <div>
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
        <Link to="/fases" className="btn-voltar">
          &lt; Voltar
        </Link>
      </div>

      <div className="section-heading-pixel">
        <h2>Fase 3: Planeta Aquático</h2>
      </div>

      <div className="fase-details-wrapper">
        <div className="fase-details-video-box">
          <video controls autoPlay loop muted>
            <source src="/videos/Water.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="fase-details-info">
          <div className="fase-details-topic">
            <h3>Design</h3>
            <p>
              Iluminação abafada, ambientado em uma piscina, simulando a
              sensação de mergulho.
            </p>
          </div>
          <div className="fase-details-topic">
            <h3>Mecânica</h3>
            <p>
              Plataformas flutuantes que afundam ao toque, junto com o joogador,
              mecanica de restaurar a posição para caso afunde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
