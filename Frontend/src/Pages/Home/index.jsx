import { Button } from "../../components/Button";
import Projects from "../../components/Projects";
import Banner from "../../layouts/Banner";
import banner from "/assets/img/banner.png";

import { useState } from "react";
import { Sponsors } from "../../components/Sponsors";
import { homepage } from "../../constants/db.jsx";
import "./Home.css";

export default function Home() {
  const [item] = useState(homepage);

  return (
    <div className="home @container ">
      <Banner img={banner} titulo="AMOR E VIDA" />

      <div className="quem-somos max-lg:flex-col-reverse items-center md:max-w-7xl md:mx-auto px-10 py-5">
        <div className="flex flex-col gap-y-5 max-lg:my-8 max-lg:basis-0">
          <h2 className="xs:text-6xl text-4xl xs:mb-10 font-light ">{item.titulo}</h2>
          <p className="xs:text-lg w-10/12">{item.resumo}</p>
          <Button url={"/sobre"}>Saiba Mais</Button>
        </div>

        <figure>
          <img src={item.imagem} alt={item.titulo} />
        </figure>
      </div>

      <main className="flex flex-col px-5">
        <Projects />

        <Sponsors />
      </main>

      <div className="voluntario mx-auto max-w-fit text-center px-5">
        <h2 className="mb-5 xs:text-4xl text-3xl">Seja um voluntário!</h2>
        <div className="flex items-center justify-center max-sm:p-5">
          <img
            className="max-sm:hidden"
            src="/assets/img/banner.png"
            alt="duas pessoas segurando uma bandeira um do lado do outro, a mulher com a vermelha e na esquerda, já o homem com a verde na direita enquanto se encaram"
          />

          <div className="h-fit">
            <h3 className="text-xl w-64 pb-5 sm:text-2xl ">Toda ajuda é bem vinda!</h3>
            <Button url="./ajudar?id=22" colorful={true}>Saiba mais</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
