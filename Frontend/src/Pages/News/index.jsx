import { useEffect, useState } from "react";
import "./News.css";
export default function Imprensa() {

  const [imprensa, setImprensa] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/brunoholanda/amor-e-vida-db/impressa")
      .then(resposta => resposta.json())
      .then(dados => {
        setImprensa(dados);

      });
  }, []);

  return (
    <article>
      <div className="imprensa w-full mx-auto">
        <h1>Imprensa</h1>
        <div className="noticias mb-20">
          {imprensa.length > 0 ? (
            imprensa.map((noticia) => <Noticia {...noticia} key={noticia.id} />)
          ) : (
            <p>Desculpe, noticias indisponiveis! Tente mais tarde...</p>
          )}
        </div>
      </div>
    </article>

  );
}

function Noticia({ imagem, titulo, resumo, link }) {
  return (
    <div className="noticia h-fit sm:h-[450px]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="w-full h-72 p-3 sm:p-5 rounded-3xl" src={imagem} alt={resumo} />
        <h2>{titulo}</h2>
        <p>{resumo}</p>
      </a>
    </div>
  );
}
