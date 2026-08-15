import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="hero-text">
          <p className="hero-subtitle">
            Projeto desenvolvido para a disciplina eletiva de Desenvolvimento de
            Jogos Digitais com Unity. Criado em trio, o jogo utiliza uma nave
            espacial como hub central (lobby), onde cada porta conecta o jogador
            a um planeta com mecânicas, ambientações e quebra-cabeças próprios
            até conseguir retornar à nave
          </p>
          <Link to="/fases" className="btn-pill">
            Descobrir Fases
          </Link>
        </div>
      </section>

      <div className="section-heading">
        <h2>Sobre o Projeto</h2>
      </div>

      <div className="glass-grid">
        <div className="glass-card">
          <span className="card-tag"> A Missão</span>
          <p>
            O ponto de partida é a nave espacial. Ao atravessar as portas dos
            corredores, o jogador é teleportado diretamente para a superfície de
            planetas desconhecidos.
          </p>
        </div>

        <div className="glass-card">
          <span className="card-tag"> Mecânicas</span>
          <p>
            Cada fases tem desafios próprios: orientação em labirintos, controle
            de física na água, atmosfera de suspense e plataformas de precisão.
          </p>
        </div>

        <div className="glass-card">
          <span className="card-tag"> Estética</span>
          <p>
            A identidade visual varia de acordo com a fase: desde a tensão
            escura do planeta de terror até cenários coloridos de doces e biomas
            aquáticos.
          </p>
        </div>
      </div>

      <div className="section-heading">
        <h2>Apresentando nossa equipe</h2>
      </div>

      <div className="glass-grid">
        <div className="glass-card">
          <span className="card-tag"> MELISSA</span>
          <li>
            <strong>Fase 3:</strong> Planeta aquático
          </li>
          <li>
            <strong>Fase 5:</strong> Labirinto de pedras
          </li>
        </div>

        <div className="glass-card">
          <span className="card-tag"> ANDRESSA</span>
          <li>
            <strong>Fase 1:</strong> Plano de Terror
          </li>
          <li>
            <strong>Fase 2:</strong> Mundo Doce
          </li>
        </div>

        <div className="glass-card">
          <span className="card-tag"> FRENANDA</span>
          <li>
            <strong>Lobby:</strong> Nave Espacial
          </li>
          <li>
            <strong>Fase 4:</strong> Buraco Negro
          </li>
        </div>
      </div>
    </div>
  );
}
