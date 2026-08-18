import { Link } from "react-router-dom";

export default function Lobby() {
  return (
    <div>
      <div style={{ textAlign: "left", marginBottom: "1rem" }}>
        <Link to="/fases" className="btn-voltar">
          &lt; Voltar
        </Link>
      </div>

      <div className="section-heading-pixel">
        <h2>Lobby: Nave Espacial</h2>
      </div>

      <div className="fase-details-wrapper">
        <div className="fase-details-video-box">
          <video controls autoPlay loop muted>
            <source src="/videos/Lobby.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="fase-details-info">
          <div className="fase-details-topic">
            <h3>Design</h3>
            <p>Simulando um cemitério, ambiente mais escuro e sinistro.</p>
          </div>
          <div className="fase-details-topic">
            <h3>Mecânica</h3>
            <p>
              Ao colidir com objetos, o jogador é obrigado a reiniciar a
              partida, caso encoste em determinado objeto, o jogo dificulta,
              aumentando o tamanho do personagem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
