import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // 1. LISTA DE IMAGENS DO CARROSSEL
  // Coloque aqui o nome exato dos arquivos que você salvou na pasta "public"
  const fotosCarrossel = [
    "/mundo_doces.png",
    "/lobby.png",
    "/fase-terror.png",
    "/fase-aquatica.png",
    "/fase-buraco.png",
    "/fase-labirinto.png",
  ];

  // 2. LÓGICA DO CARROSSEL
  const [indexAtual, setIndexAtual] = useState(0);

  const fotoAnterior = () => {
    // Se estiver na primeira foto, volta pra última. Senão, volta uma.
    setIndexAtual((atual) =>
      atual === 0 ? fotosCarrossel.length - 1 : atual - 1,
    );
  };

  const proximaFoto = () => {
    // Se estiver na última foto, volta pra primeira. Senão, avança uma.
    setIndexAtual((atual) =>
      atual === fotosCarrossel.length - 1 ? 0 : atual + 1,
    );
  };

  return (
    <div>
      {/* Seção Hero Lado a Lado */}
      <section className="hero-wrapper-new">
        <div className="hero-text-new">
          <h1 className="hero-title-pixel">Cosmos</h1>
          <p className="hero-subtitle-new">
            Projeto desenvolvido para a disciplina eletiva de Desenvolvimento de
            Jogos Digitais com Unity. Criado em trio, o jogo utiliza uma nave
            espacial como hub central (lobby), onde cada porta conecta o jogador
            a um planeta com mecânicas, ambientações e quebra-cabeças próprios
            até conseguir retornar à nave.
          </p>
        </div>

        {/* Carrossel de Imagem da Fase */}
        <div className="hero-carousel">
          <button className="carousel-btn" onClick={fotoAnterior}>
            {"<"}
          </button>

          {/* Container que permite a transição suave */}
          <div className="carousel-img-container">
            {fotosCarrossel.map((foto, index) => (
              <img
                key={index}
                src={foto}
                alt={`Preview da fase ${index + 1}`}
                className={`carousel-img ${index === indexAtual ? "active" : ""}`}
              />
            ))}
          </div>

          <button className="carousel-btn" onClick={proximaFoto}>
            {">"}
          </button>
        </div>
      </section>

      {/* Seção Sobre o Projeto */}
      <div className="section-heading-pixel">
        <h2>Sobre o projeto</h2>
      </div>

      <div className="glass-grid">
        <div className="feature-card">
          <h3>A missão</h3>
          <p>
            O ponto de partida é a nave espacial. Ao atravessar as portas dos
            corredores, o jogador é teleportado diretamente para a superfície de
            planetas desconhecidos.
          </p>
        </div>

        <div className="feature-card">
          <h3>Mecânicas</h3>
          <p>
            Cada fases tem desafios próprios: orientação em labirintos, controle
            de física na água, atmosfera de suspense e plataformas de precisão.
          </p>
        </div>

        <div className="feature-card">
          <h3>Estética</h3>
          <p>
            A identidade visual varia de acordo com a fase: desde a tensão
            escura do planeta de terror até cenários coloridos de doces e biomas
            aquáticos.
          </p>
        </div>
      </div>

      {/* Seção da Equipe */}
      <div className="section-heading-pixel">
        <h2>Apresentando nossa equipe</h2>
      </div>

      <div className="team-grid">
        <div className="team-member">
          {/* Adicione a foto na pasta public */}
          <img src="/foto-mel.png" alt="Melissa" className="team-photo" />
          <h3 className="team-name">Melissa</h3>
          <p>
            <strong>Fase 3:</strong> Planeta aquático
          </p>
          <p>
            <strong>Fase 5:</strong> Labirinto de pedras
          </p>
        </div>

        <div className="team-member">
          {/* Adicione a foto na pasta public */}
          <img src="/foto-andressa.png" alt="Andressa" className="team-photo" />
          <h3 className="team-name">Andressa</h3>
          <p>
            <strong>Fase 1:</strong> Planeta de Terror
          </p>
          <p>
            <strong>Fase 2:</strong> Mundo doce
          </p>
        </div>

        <div className="team-member">
          {/* Adicione a foto na pasta public */}
          <img src="/foto-fernanda.png" alt="Fernanda" className="team-photo" />
          <h3 className="team-name">Fernanda</h3>
          <p>
            <strong>Lobby:</strong> Nave espacial
          </p>
          <p>
            <strong>Fase 4:</strong> Buraco Negro
          </p>
        </div>
      </div>
    </div>
  );
}
