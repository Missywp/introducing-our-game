import { Link } from "react-router-dom";

export default function Doce() {
  return (
    <div>
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
        <Link to="/fases" className="btn-voltar">
          &lt; Voltar
        </Link>
      </div>

      <div className="section-heading-pixel">
        <h2>Fase 2: Mundo Doce</h2>
      </div>

      <div className="fase-details-wrapper">
        <div className="fase-details-video-box">
          <video controls autoPlay loop muted>
            <source src="/videos/Doce.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="fase-details-info">
          <div className="fase-details-topic">
            <h3>Design</h3>
            <p>
              Simulando um ambiente feito totalmente de deces, desde as árvores
              até os obstáculos, utilizando cores vivas.
            </p>
          </div>
          <div className="fase-details-topic">
            <h3>Mecânica</h3>
            <p>
              Paredes que se movem e obstáculos rápidos que reiniciam a partida
              caso encoste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
