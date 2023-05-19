import { about } from "../../constants/db.js";
import Banner from "../../layouts/Banner";
import "./About.css";
import missao from "/assets/icons/missao.png";
import valores from "/assets/icons/valores.png";
import visao from "/assets/icons/visao.png";
import banner from "/assets/img/banner-about.png";

export default function About() {
  return (
    <main className="about @container">
      <header className="items-center">
        <Banner img={banner} titulo="QUEM SOMOS" />
        <div className="img-nos max-w-4xl mx-auto">
          <img src={about.imagem} alt={about.titulo} />
          <p className="mt-12">{about.texto[0]}</p>
          <p className="my-8">{about.texto[1]}</p>
        </div>
      </header>

      <div className="cards">
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
      </div>
    </main>
  );
}
