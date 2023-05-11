import { Link } from "react-router-dom";
import "./Footer.css";
import FooterLinks from "./FooterLinks";

import fb from "/assets/icons/fb.png";
import insta from "/assets/icons/insta.png";
import yt from "/assets/icons/yt.png";
import logo from "/assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="footer max-sm:mt-12">
      <div className="content relative max-w-full px-6 max-md:pt-20 ">
        <div className="md:hidden mx-auto w-fit"><img src={logo} className="max-w-full" alt="" /></div>

        <div className="links max-w-full">
          <FooterLinks />
        </div>

        <div className="flex flex-wrap items-center justify-between container gap-x-2 gap-y-8 mx-auto">
          <div className="xl:flex ">
            <ul className="max-w-lg mb-8 px-4">
              <h3 className="text-2xl mb-5">Sede administrativa e Casa de acolhimento</h3>
              <li>Rua Mestre Janjão, 85, São José - Montes Claros/MG, CEP:39400-353 </li>
              <li>Telefone: +55 (38) 8834-1899</li>
              {/* <li>Telefone: +55 (38) 98858-5246</li> */}
              <li>Email: casaamorevida@outlook.com</li>
              <li>CNPJ: 28.467.302/0001-93</li>
            </ul>

            <ul className="max-w-md px-3">
              <h3 className="text-2xl mb-5">Galpão de reciclagem</h3>
              <li>Av. Ovídio de Abreu, 419, Centro - Montes Claros/MG, CEP:39400-068</li>
              <li>Telefone: +55 (38) 98858-5246</li>
            </ul>
          </div>

          <div className="max-md:hidden"><img src={logo} className="max-w-full" alt="" /></div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center mt-10 w-full px-8 py-4 ">
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

        <div className="text-right max-xs:text-sm ">© 2023 Amor e Vida: Comover e Mover</div>
      </div>
    </footer>
  );
}
