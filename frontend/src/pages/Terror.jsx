import { Link } from "react-router-dom";

export default function Terror() {
  return (
    <div>
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
        <Link to="/fases" className="btn-voltar">
          &lt; Voltar
        </Link>
      </div>

      <div className="section-heading-pixel">
        <h2>Fase 1: Planeta de Terror</h2>
      </div>

      <div className="fase-details-wrapper">
        <div className="fase-details-video-box">
          <video controls autoPlay loop muted>
            <source src="/videos/Terror.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="fase-details-info">
          <div className="fase-details-topic">
            <h3>Design</h3>
            <p>
              Design feito para simular o lobby de uma nave espacial, ambiente
              com visual tecnológico e futurista.
            </p>
          </div>
          <div className="fase-details-topic">
            <h3>Mecânica</h3>
            <p>
              Detecta presença do personagem ao colidir com o bloco, a porta se
              abre e o jogador é levado as fases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
