function Card({ imagem, titulo, ano, genero, nota }) {
  return (
    <article className="movie-card">
      <img src={imagem} alt={`Pôster de ${titulo}`} />

      <div className="movie-info">
        <span className="movie-genre">{genero}</span>

        <h3>{titulo}</h3>

        <div className="movie-details">
          <span>{ano}</span>
          <span className="rating">★ {nota}</span>
        </div>

        <button
          className="movie-button"
          onClick={() => alert(`Filme selecionado: ${titulo}`)}
        >
          Ver detalhes
        </button>
      </div>
    </article>
  );
}

export default Card;