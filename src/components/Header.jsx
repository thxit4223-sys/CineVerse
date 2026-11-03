function Header() {
  return (
    <header className="header" id="inicio">
      <div className="header-content">
        <span className="tag">SEU UNIVERSO DE FILMES</span>

        <h1>
          Descubra histórias
          <br />
          <span>que marcam.</span>
        </h1>

        <p>
          Encontre filmes incríveis, explore novos gêneros
          e descubra sua próxima história favorita.
        </p>

        <a href="#filmes" className="main-button">
          Explorar catálogo
        </a>
      </div>
    </header>
  );
}

export default Header;