import Header from "./components/Header";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const filmes = [
    {
      titulo: "Interestelar",
      ano: "2014",
      genero: "Ficção científica",
      nota: "8.7",
      imagem: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      titulo: "A Origem",
      ano: "2010",
      genero: "Suspense",
      nota: "8.8",
      imagem: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
      titulo: "Batman",
      ano: "2022",
      genero: "Ação",
      nota: "7.8",
      imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
    },
    {
      titulo: "Duna",
      ano: "2021",
      genero: "Aventura",
      nota: "8.0",
      imagem: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
    }
  ];

  return (
    <>
      <Menu />
      <Header />

      <main>
        <section className="movies-section" id="filmes">
          <div className="section-heading">
            <span className="tag">NOSSO CATÁLOGO</span>
            <h2>Filmes em destaque</h2>
            <p>Escolha sua próxima aventura.</p>
          </div>

          <div className="movie-grid">
            {filmes.map((filme) => (
              <Card
                key={filme.titulo}
                imagem={filme.imagem}
                titulo={filme.titulo}
                ano={filme.ano}
                genero={filme.genero}
                nota={filme.nota}
              />
            ))}
          </div>
        </section>

        <section className="about-section" id="sobre">
          <span className="tag">SOBRE O CINEVERSE</span>

          <h2>O cinema em um só lugar.</h2>

          <p>
            O CineVerse é um catálogo virtual desenvolvido
            para apresentar filmes de diferentes gêneros,
            facilitar descobertas e conectar pessoas ao
            universo do cinema.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;