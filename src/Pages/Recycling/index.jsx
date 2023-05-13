import { useState } from "react";
import { posts } from "../../constants/db.js";
import Banner from "../../layouts/Banner";
import "./Recycling.css";
import banner from "/assets/img/banner-recycling.png";
import doador from "/assets/img/doador-ilustration.png";
import foto from "/assets/img/recycling-picture.png";

export default function Recycling() {
  const [item] = useState(posts[1]);

  return (
    <article className="reciclagem">
      <Banner img={banner} titulo="Reciclagem" />
      <div className="img-nos max-w-4xl mx-auto">
        <img className="mt-20" src={foto} alt="foto em de uma ação para doação" />
        <p className="my-8 mt-12 mb-20">{item.texto}</p>
        <h2>Doe materiais recicláveis</h2>
        <div className="reciclagem__doe my-8 mt-12 mb-20">
          <img src={doador} alt="ilustracao do doador" />
          <div className="ml-20 reciclagem__doe-texto">
            <h3>Recebemos materiais recicláveis diariamente</h3>
            <p>Aceitamos diversos materiais e objetos separados e higienizados no nosso galpão. </p>
            <p>Traga a sua doação ao nosso Galpão: Av. Ovídio de Abreu, 419, Centro - Montes Claros/MG, 39400-068, de segunda à sexta entre 8h às 17h e aos sábados entre 8h às 12 horas. Ou deixar com algum de nossos voluntários nos supermercados Bretas e Villefort.</p>
          </div>
        </div>
      </div>
    </article >
  );
}
