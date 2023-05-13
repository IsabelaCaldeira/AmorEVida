import { posts, testimonials } from "../../constants/db.js";
import { Button } from "../Button";
import "./Projects.css";

export default function Projects() {
  let projects = [];
  let campains = [];
  for (let i in posts) {
    posts[i].tipo == "Projeto" ? projects.push(posts[i]) : campains.push(posts[i]);
  }

  const testimonialArr = [...testimonials];

  return (
    <>
      <section className="cards-section">
        <h2>Projetos</h2>
        <Cards itens={projects} />
      </section>

      <section className="cards-section">
        <h2>Campanhas</h2>
        <Cards itens={campains} btn={"DOAR"} />
      </section>

      <section className="recycle">
        <h2>Doe materiais recicláveis</h2>

        <div className="flex w-fit items-center mx-auto">
          <img src="/assets/icons/HomemDeAmor.svg" className="w52" alt="" />

          <div className="w-fit flex items-center flex-col ">
            <h3 className="text-xl pb-5">Recebemos materiais recicláveis diariamente</h3>
            {/* <Button>Saiba como</Button> */}
            <Button colorful={true}>Saiba onde levar</Button>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <h2>Depoimentos</h2>
        <Testimonial itens={testimonialArr} />
      </section>
    </>
  );
}

function Cards({ itens, btn }) {
  return (
    <div className="cardEstrutura max-w-5xl mx-auto justify-evenly gap-x-4">
      {itens.map((item, index) => (
        <Card
          titulo={item.titulo}
          resumo={item.resumo}
          icone={item.icone}
          tipo={item.tipo}
          btn={btn}
          key={item.id + index}
        />
      ))}
    </div>
  );
}

const Card = ({ titulo, resumo, icone, tipo, btn = "Saiba Mais!" }) => {
  // Adiciona a classe com a cor desejada apenas nos 4 primeiros itens
  const h3Class = tipo == "Projeto" ? "textoVermelho" : "textoVerde";

  return (
    <div className="card min-[1300]:max-w-lg max-w-md py-5 pr-7">
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
        <Button>{btn}</Button>
      </div>
    </div>
  );
};

const Testimonial = ({ itens }) => {
  return (
    <div className="cardEstrutura max-w-6xl mx-auto justify-evenly sm:px-10">
      {itens.map((item, index) => (
        <TestimonialCard
          titulo={item.titulo}
          resumo={item.resumo}
          video={item.video}
          campanha={item.campanha}
          id={item.id}
          key={item.id + index}
        />
      ))}
    </div>
  );
};

function TestimonialCard({ titulo, resumo, video, campanha }) {

  return (
    <div className="card testimonial sm:max-w-md max-w-sm mx-2 p-3 sm:p-6 flex-col">
      <video className="video rounded-2xl" src={video} controls>
        Seu navegador não suporta video, atualize-o ou use um que suporte.
      </video>

      <div className="descricao flex flex-col justify-center pt-5">
        <span className="text-lg text-green-800">{campanha}</span>
        <h4 className="text-2xl mb-5">{titulo}</h4>

        <div className="resumo mb-5">
          <p>{resumo}</p>
        </div>
      </div>
    </div>
  );
}
