import { Link } from "react-router-dom";

export default function Buraco() {
  return (
    <div>
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
        <Link to="/fases" className="btn-voltar">
          &lt; Voltar
        </Link>
      </div>

      <div className="section-heading-pixel">
        <h2>Fase 4: Buraco Negro</h2>
      </div>

      <div className="fase-details-wrapper">
        <div className="fase-details-video-box">
          <video controls autoPlay loop muted>
            <source src="/videos/Buraco.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="fase-details-info">
          <div className="fase-details-topic">
            <h3>Design</h3>
            <p>
              Simulando plataformas gravitacionas e uma onda escura pairando.
            </p>
          </div>
          <div className="fase-details-topic">
            <h3>Mecânica</h3>
            <p>Plataformas flutuantes que despencam, reiniciando a fase.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
