import Projects from "../../components/Projects";
import Banner from "../../layouts/Banner";
import {Button} from "../../components/Button";
import banner from "/assets/img/banner.png";

import { useState } from "react";
import { homepage } from "../../constants/db.js";
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
          <Button>
            Saiba Mais
          </Button>
        </div>

        <div>
          <img src={item.imagem} alt={item.titulo} />
        </div>
      </div>

      <main className="flex flex-col projects">
        <Projects />
      </main>

      <div className="voluntario mx-auto w-fit text-center py-10 px-4">
        <h2 className="mb-5 sm:text-4xl text-xl font-bold">Toda Ajuda é Bem Vinda!</h2>
        {/* <button className="btn bg-[#cc1814] text-white rounded-xl px-6 py-2">
          Junte-se a nós, seja um Voluntário!
        </button> */}
        <Button colorful={true}>
          Junte-se a nós, seja um Voluntário!
        </Button>
      </div>
    </div>
  );
}
