import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.css";

export const Carousel = () => (
  <section className="carousel max-w-6xl px-10 m-auto my-10 py-8 bg-white text-black -z-0">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {db.map((db) => (
        <SwiperSlide key={db.id} className="">
          <Itens {...db} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

const Itens = ({ ano, img, tipo="Projeto", data, titulo, descricao }) => (
  <div className="carousel-children mx-auto grid max-w-5xl">
    <div className="h-12" style={{ gridRow: "1 / 2" }}>
      <h2 className="text-5xl ml-10">{ano}</h2>
    </div>

    <div className="grid px-10 py-5 gap-x-10 hover:cursor-grab z-0 active:cursor-grabbing" style={{ gridRow: "2/3" }}>
      <div className="" style={{ gridColumn: "1/2" }}>
        <img className="max-w-screen-sm rounded-xl" src={`/assets/img/${img}`} alt="" />
        {/* <div className="w-[320px] aspect-[.8] rounded-xl bg-slate-600"></div> */}
      </div>

      {/* <div className="vertical-bar w-3 mx-5 bg-black"></div> */}
      <img src="/assets/img/Line.svg" className="" style={{ gridColumn: "2/3" }} alt="" />

      <div className="max-w-[400px]" style={{ gridColumn: "3/4" }}>
        <div className="tags flex gap-x-4">
          <span className="text-red-600">{tipo}</span>
          <span className="opacity-60">{data}</span>
        </div>

        <div className="title pb-4 text-4xl">{titulo}</div>

        <p className="text-lg">{descricao}</p>
      </div>
    </div>
  </div>
);

const db = [
  {
    id: 0,
    ano: "2023",
    data: "Maio 2022",
    titulo: "Reciclagem",
    img: "Galpao.png",
    descricao:
      "Estamos em processo de mudança do Galpão localizado na Avenida Ovídio de Abreu.Nesse período estaremos abrindo em horários variados, conforme a demanda. Em breve divulgaremos o novo endereço, e ficaremos felizes em recebe-los no nosso novo espaço, com melhor estrutura. Agradecemos a atenção e parceria!",
  },
  {
    id: 1,
    ano: "2022",
    data: "?? De Maio 2022",
    titulo: "Reciclagem",
    img: "reciclagem.png",
    descricao:
      "É com imensa satisfação que compartilhamos com vocês que o nosso projeto foi contemplado no edital da Fundação Banco do Brasil. A disputa era grande, seria escolhida apenas uma Associação por Estado, e em Minas Gerais foi escolhido o Projeto Amor e Vida. Com esse recurso vamos comprar: 2 prensas modernas, 1 elevador de carga, 2 balanças eletrônicas, 2 carrinhos de carga e contratar 1 motorista para o nosso caminhão.",
  },
  {
    id: 2,
    ano: "2022",
    data: "?? De Junho 2022",
    titulo: "Cursos e Palestras",
    img: "cursosEpalestras.png",
    descricao:
      "Hoje levamos consciência ambiental aos alunos da Escola SESC. A Psicóloga @ingridthaynapsiconversou com os estudantes e foi bem recebida por todos. Fundamental esse trabalho com as crianças, pois as mesmas transmitem para os pais a necessidade de separar os recicláveis. Muitíssimo obrigado a coordenação do SESC por essa parceria!",
  },
  {
    id: 3,
    ano: "2021",
    data: "?? De Setembro 2021",
    titulo: "Dia Das Crianças",
    img: "diaDasCriancas.png",
    tipo: "Campanha",
    descricao:
      "Doe brinquedos e faca uma criança feliz!",
  },
  {
    id: 4,
    ano: "2021",
    data: "?? De Maio 2021",
    titulo: "Alimente uma Vida",
    img: "alimenteUmaVida.png",
    descricao: "",
  }
  ,{
    id: 5,
    ano: "2021",
    data: "?? De Março 2021",
    titulo: "Doação Alimentos",
    img: "doacaoAlimentos.png",
    descricao: "",
  }
  ,{
    id: 6,
    ano: "2020",
    data: "?? De Dezembro 2020",
    titulo: "Doação de cestas Básicas",
    img: "doacaoDeCestasBasicas.png",
    descricao: "",
  },
];
