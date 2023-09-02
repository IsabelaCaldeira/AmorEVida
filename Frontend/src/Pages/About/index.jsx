import { Carousel } from "../../components/Carousel/index.jsx";
import { about, managements, testimonials } from "../../constants/db.jsx";
import Banner from "../../layouts/Banner";
import "./About.css";
import missao from "/assets/icons/missao.png";
import valores from "/assets/icons/valores.png";
import visao from "/assets/icons/visao.png";
import banner from "/assets/img/banner-about.png";

export default function About() {
  const testimonialArr = [...testimonials];

  return (
    <main className="about ">
      <header className="items-center">
        <Banner img={banner} titulo="QUEM SOMOS" />
        <div className="img-nos max-w-4xl mx-auto">
          <img src={about.imagem} alt={about.titulo} />
          <p className="mt-12">{about.texto[0]}</p>
          <p className="my-8">{about.texto[1]}</p>
        </div>
      </header>

      <Carousel />

      <section className="cards">
        <div className="card">
          <div className="quadrado">
            <img src={missao} alt="icone da missao do projeto" />
            <h2>Missão</h2>
            <p>
              Acolher e capacitar pessoas em situação de vulnerabilidade social, juntamente com auxílio de parcerias,
              restaurando sua dignidade e bem estar social.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="quadrado">
            <img src={visao} alt="icone da visao do projeto" />
            <h2>Visão</h2>
            <p>
              Ser referência no apoio a pessoas em vulnerabilidade, auxiliando famílias e contribuindo para o
              desenvolvimento social no Norte de Minas Gerais.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="quadrado">
            <img src={valores} alt="icone dos valores do projeto" />
            <h2>Valores</h2>
            <p>Solidariedade, Disciplina, Respeito e Equidade.</p>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <h2>Depoimentos</h2>
        <Testimonial itens={testimonialArr} />
      </section>

      <section className="cards-section w-full mb-32">
        <h2>Diretoria e Gestão</h2>
        <Management valor={managements} />
      </section>
    </main>
  );
}

// Testimonials
const Testimonial = ({ itens }) => {
  return (
    <div className="cardEstrutura flex-wrap w-full justify-evenly sm:px-10">
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

function TestimonialCard({ titulo, resumo, video }) {
  return (
    <div className="card testimonial sm:max-w-md max-w-sm mx-2 p-3 xs:p-6 flex-col">
      <video className="video rounded-2xl " src={video} controls>
        Seu navegador não suporta video, atualize-o ou use um que suporte.
      </video>

      <div className="descricao flex flex-col justify-center pt-5">
        {/* <span className="text-lg text-green-800">{}</span> */}
        <h4 className="text-2xl mb-5">{titulo}</h4>

        <div className="resumo mb-5">
          <p>{resumo}</p>
        </div>
      </div>
    </div>
  );
}

// Managements
function Management({ valor }) {
  return (
    <div className="management flex-wrap cardEstrutura justify-center px-10 gap-8">
      {valor.map((item, index) => (
        <ManagementCard area={item.area} nome={item.nome} cargo={item.cargo} img={item.imagem} key={item.id + index} />
      ))}
    </div>
  );
}

const ManagementCard = ({ area, nome, cargo, img }) => {
  return (
    <div className="flex flex-wrap subvv items-center rounded-2xl gap-10 p-7 ">
      <div>
        <img className="rounded-2xl aspect-square w-56" src={img} alt="" />
      </div>

      <div className="positions">
        <h3 className="text-2xl">{area}</h3>
        <h4 className="opacity-80">{nome}</h4>
        <p className="opacity-60">{cargo}</p>
      </div>
    </div>
  );
};
