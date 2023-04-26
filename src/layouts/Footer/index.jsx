import { Link } from "react-router-dom";
import "./Footer.css";
import FooterLinks from "./FooterLinks";
import FooterSlider from "./FooterSlider";

import fb from "/assets/icons/Freepik-facebook.png";
import insta from "/assets/icons/Rakib-Hassan-Rahim-instagram.png";
import yt from "/assets/icons/Rakib-Hassan-Rahim-youtube.png";
import logo from "/assets/img/logo.png";

export default function Footer() {
  // const social = [insta, fb, yt];

  return (
    <footer className="footer border-t-2 border-solid border-firebrick">
      <div className="content relative max-w-full px-6">
        <div className="sm:flex flex-col items-center font-bold p-8">
          <h3 className=" text-gray-800 text-lg">Amor & Vida</h3>
          <p className="text-gray-500 pl-1">Comover e Mover</p>

          <div className="imagens-sociais">
            <ul className="flex">
              <li className="ml-1 mr-2 mt-5 ">
                <Link href="#" target="_blank">
                  <img className="h-5 redes-sociais " src={insta} alt="" />
                </Link>
              </li>
              <li className="ml-1 mr-2 mt-5">
                <Link href="#" target="_blank">
                  <img className="h-5 redes-sociais" src={fb} alt="" />
                </Link>
              </li>
              <li className="ml-1 mt-5">
                <Link href="#" target="_blank">
                  <img className="h-[1.3rem] redes-sociais-yt" src={yt} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="links max-w-full">
          <FooterLinks />
        </div>

        {/* 
            <ul className="">
              <li>CNPJ: 28.467.302/0001-93</li> 
               <li>Galpão de reciclagem: Av. Ovídio de Abreu, 419, Centro - Montes Claros/MG, 39400-068</li> 
              <li>
                <img src={pin} className="h-5 pr-1" alt="" />
                Rua Mestre Janjão, 85, São José - Montes Claros/MG, 39400-353{" "}
              </li>
              <li>Telefone: +55 (38) 98858-5246</li>
              <li>
                <img src={mail} className="h-5 pr-1" alt="" /> casaamorevida@outlook.com
              </li>

              <img src={pin} className="h-10" alt="" />
            <li>CNPJ: 28.467.302/0001-93</li>
            <li>Galpão de reciclagem: Av. Ovídio de Abreu, 419, Centro - Montes Claros/MG, 39400-068</li>
            <li>Sede Administrativa e casa de acolhimento: Rua Mestre Janjão, 85, São José - Montes Claros/MG, 39400-353</li>
            <li>Telefone: +55 (38) 98858-5246</li>
          <li>Email: casaamorevida@outlook.com</li> 
            </ul>
          */}


        <FooterSlider />
      </div>

      <div className="grid grid-cols-2 items-center bg-gray-100 bg-opacity-1 mt-10 w-full px-8 py-4 ">
        <div className="logo">
          <Link to="./">
            <img src={logo} className="max-w-full h-20" alt="logo amor e vida" />
          </Link>
        </div>

        <div className="text-right">© 2023 Amor e Vida: Comover e Mover</div>
      </div>
    </footer>
  );
}
