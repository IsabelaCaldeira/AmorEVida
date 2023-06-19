import { posts } from "../../constants/db.jsx";
import { Button } from "../Button";
import "./Projects.css";

export default function Projects() {
  let projects = [];
  let campains = [];
  for (let i in posts) {
    posts[i].tipo == "Projeto" ? projects.push(posts[i]) : campains.push(posts[i]);
  }

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
          <img src="/assets/icons/HomemDeAmor.svg" className="w-52" alt="" />

          <div className="w-fit flex items-center flex-col ">
            <h3 className="text-xl pb-5">Recebemos materiais recicláveis diariamente</h3>
            {/* <Button>Saiba como</Button> */}
            <Button colorful={true}>Saiba onde levar</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Cards({ itens, btn }) {
  return (
    <div className="cardEstrutura max-w-6xl justify-center lg:justify-evenly max-lg:gap-x-4 ">
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
  const h3Class = tipo === "Projeto" ? "textoVermelho" : "textoVerde";

  return (
    <div className="card lg:flex p-5 max-sm:px-8  min-[1300]:max-w-lg lg:max-w-md w-fit max-w-xs ">
      <div className="icone lg:pr-3 lg:pl-5 lg:py-6 max-lg:mx-auto w-fit lg:w-48 lg:max-w-xs">
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
