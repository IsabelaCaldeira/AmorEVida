import pin from "/assets/icons/locationPin.png";
import mail from "/assets/icons/mail.png";
import wats from "/assets/icons/whatsapp-pixel-perfect.png";

import { Link } from "react-router-dom";
import "./FotterLinks.css";

export default function FooterLinks() {
  return (
    <section className="footerLinks max-md:justify-evenly md:justify-center max-sm:flex-col flex-row">
      <div className="section">
        <h3>
          <Link to="./">Início</Link>
        </h3>
      </div>

      <div className="section">
        <h3>
          <Link to="./sobre">Sobre Nós</Link>
        </h3>
        <div className="subSection">
          <ul>
            <li>
              <Link to="./historia">Nossa História</Link>
            </li>
            <li>
              <Link to="./historia">Diretoria e Gestão</Link>
            </li>
            <li>
              <Link to="./historia">Missão, Visão e Valores</Link>
            </li>
            <li>
              <Link to="./historia">Depoimentos</Link>
            </li>
            <li>
              <Link to="./historia">Imprensa</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h3>
          {/* <Link to="./projetos">Projetos e Campanhas</Link> */}
          <Link to="./projetos">Campanhas</Link>
        </h3>
        <div className="subSection">
          <ul>
            <li>
              <Link to="./historia">A Casa</Link>
            </li>
            <li>
              <Link to="./reciclagem">Reciclagem</Link>
            </li>
            <li>
              <Link to="./historia">Cursos</Link>
            </li>
            <li>
              <Link to="./historia">Doações</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="section hidden">
        <h3>
          <Link to="./transparencia">Transparência</Link>
        </h3>
      </div>

      <div className="section">
        <h3>
          <Link to="./ajudar">Ajude Nós</Link>
        </h3>
        <div className="subSection">
          <ul>
            <li>
              <Link to="./doacoes">Doações</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="section">
        <h3>
          <Link to="./contato">Contate nós</Link>
        </h3>
        <div className="subSection">
          <ul>
            <li>
              <Link to="./historia">Email</Link>
            </li>
            <li>
              <Link to="./historia">Telefone</Link>
            </li>
            <li>
              <Link to="./historia">Endereços</Link>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="section">
        <h3 className="text-xl font-bold opacity-90">
          <Link>Contato</Link>
        </h3>

        <div className="subSection">
          <ul className="location">
            {/* <li>CNPJ: 28.467.302/0001-93</li> */}
            {/* <li>Galpão de reciclagem: Av. Ovídio de Abreu, 419, Centro - Montes Claros/MG, 39400-068</li> */}
            <li>
              <img src={pin} alt="" />
              Rua Mestre Janjão, 85, São José - Montes Claros/MG, 39400-353
            </li>
            <li>
              <img src={wats} alt="" /> +55 (38) 98858-5246
            </li>
            <li>
              <img src={mail} className="items-baseline" alt="" />
              casaamorevida@outlook.com
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
