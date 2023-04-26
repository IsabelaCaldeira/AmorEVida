import { Link } from "react-router-dom";
import { posts, testimonials } from "../../constants/db.js";
import "./Projects.css";
import {Button} from "../Button";

export default function Projects() {
  let projects = [];
  let campains = [];
  for (let i in posts) {
    posts[i].tipo == "Projeto" ? projects.push(posts[i]) : campains.push(posts[i]);
  }

  // useState

  // Spread
  const testimonialArr = [...testimonials];

  return (
    <>
      <section className="cards-title">
        <h2>Projetos</h2>
        <Cards itens={projects} />
      </section>

      <section className="cards-title">
        <h2>Campanhas</h2>
        <Cards itens={campains} />
      </section>

      <section className="cards-title">
        <h2>Depoimentos</h2>
        <Testimonial itens={testimonialArr} />
      </section>
    </>
  );
}

function Cards({ itens }) {
  return (
    <div className="cardEstrutura lg:w-4/5 max-w-5xl mx-auto justify-evenly gap-x-4 max-xs:px-6">
      {itens.map((item, index) => (
        <Card
          titulo={item.titulo}
          resumo={item.resumo}
          icone={item.icone}
          tipo={item.tipo}
          id={item.id}
          key={item.id + index}
        />
      ))}
    </div>
  );
}

const Card = ({ titulo, resumo, icone, tipo, id }) => {
  // Adiciona a classe com a cor desejada apenas nos 4 primeiros itens
  const h3Class = tipo == "Projeto" ? "textoVermelho" : "textoVerde";
  
  return (
    <div className="card min-[1300]:max-w-lg max-w-md py-5">
      <div className="icone pr-3 pl-5 py-6">
        <img src={icone} alt={titulo} />
      </div>

      <div className="descricao flex flex-col justify-center mr-2">
        <h3 className={h3Class}>{tipo}</h3>
        <h4 className="text-2xl mb-5">{titulo}</h4>

        <div className="resumo mb-5">
          <p>{resumo}</p>
        </div>

        {/* <Link to={`/projeto/${id}`}> */}
        <Button>Saiba Mais!</Button>
      </div>
    </div>
  );
};

const Testimonial = ({ itens }) => {
  return (
    <div className="cardEstrutura lg:w-4/5 max-w-6xl mx-auto justify-evenly gap-x-4">
      {itens.map((item, index) => (
        <TestimonialCard
          titulo={item.titulo}
          resumo={item.resumo}
          video={item.video}
          endereco={item.endereco}
          id={item.id}
          key={item.id + index}
        />
      ))}
    </div>
  );
};

function TestimonialCard({ titulo, resumo, video, endereco }) {
  let bg = {
    backgroundImage: `url(${video})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "700px",
    height: "250px",
  };

  return (
    <div className="card testimonial sm:max-w-lg max-tn:w-64 tn:max-w-xs flex-col">
      {/* <img className="rounded-t-2xl" src={video} alt={resumo} /> */}
      <div className="max-w-full">
        <div className="img max-w-full rounded-t-2xl" style={bg}></div>
      </div>

      {/* 
      <div className="video">
        <video width="320" height="240" controls >
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Seu navegador não suporta este formato de video.
        </video>  
      </div>
        */}

      <div className="descricao flex flex-col justify-center p-6">
        <span className="text-lg text-gray-800">{endereco}</span>
        <h4 className="text-2xl mb-5">{titulo}</h4>

        <div className="resumo mb-5">
          <p>{resumo}</p>
        </div>

        <Button>Saiba Mais!</Button>
      </div>
    </div>
  );
}
