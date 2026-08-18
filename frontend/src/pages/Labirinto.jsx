import { Link } from "react-router-dom";

export default function Labirinto() {
  return (
    <div>
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
        <Link to="/fases" className="btn-voltar">
          &lt; Voltar
        </Link>
      </div>

      <div className="section-heading-pixel">
        <h2>Fase 5: Labirinto de Pedras</h2>
      </div>

      <div className="fase-details-wrapper">
        <div className="fase-details-video-box">
          <video controls autoPlay loop muted>
            <source src="/videos/Labirinto.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="fase-details-info">
          <div className="fase-details-topic">
            <h3>Design</h3>
            <p>
              Muros de pedras com baixa visibilidade, chão de terra e distorção
              de tamanho.
            </p>
          </div>
          <div className="fase-details-topic">
            <h3>Mecânica</h3>
            <p>
              Visão limitada e obstáculos ativados ao toque, obrigando o jogador
              a reiniciar a partida e aumentando o tamanho do jogador,
              dificultando passagem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
