import { useState } from "react";
import { posts } from "../../constants/db.js";
import Banner from "../../layouts/Banner";
import banner from "/assets/img/banner-about.png";
import "./About.css";

export default function About() {
  const [item] = useState(posts[0]);

  return (
    <article className="about @container">
      <Banner img={banner} titulo="QUEM SOMOS" />

      {/* <div className="img-nos">
        <img src={item.imagem} alt={item.titulo} />
        <p>{item.texto}</p>
      </div> */}

      <div
        className="img-nos w-3/4 rounded-3xl mb-32 p-10 mx-auto text-white h-auto @6xl:max-h-[50vh] "
        style={{ backgroundImage: "url(" + item.imagem + ")" }}
        alt={item.titulo}
      >
        <h2 className="text-6xl">Sobre nós</h2>
        <p className="my-12 text-xl">{item.texto}</p>
      </div>

      <h2 className="text-4xl">Titulo Explicativo ou Introdutorio!</h2>
      <h3 className="text-2xl mt-3">Lembrete colocar texto dentro do card.</h3>
      <div className="cards">
        <div className="card">
          <h2>Missão</h2>
          <div className="quadrado">
            <p>
              Acolher e capacitar pessoas em situação de vulnerabilidade social, juntamente com auxílio de parcerias,
              restaurando sua dignidade e bem estar social.
            </p>
          </div>
        </div>
        <div className="card">
          <h2>Visão</h2>
          <div className="quadrado">
            <p>
              Ser referência no apoio a pessoas em vulnerabilidade, auxiliando famílias e contribuindo para o
              desenvolvimento social no Norte de Minas Gerais.
            </p>
          </div>
        </div>
        <div className="card">
          <h2>Valores</h2>
          <div className="quadrado">
            <p>Solidariedade, Disciplina, Respeito e Equidade.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
