import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/img/logo.png";
import {Button} from "/src/components/Button";
import "./styles.css";

export default function Navbar() {
  const [mob, setMob] = useState(false);
  const active = mob ? "active" : "";
  
  return (
    <nav className="@container navbar z-10">
      <div className="logo">
        <Link to="./">
          <img src={logo} alt="logo amor e vida" />
        </Link>
      </div>

      <NavLinks show={mob} setClose={setMob} />

      <div className="flex items-center">
        <Button colorful={true} padding={"4px 24px"}>Doar</Button>

        <div className={"mobile p-4 ml-6 " + active} onClick={() => setMob(prevState => !prevState)}>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ show, setClose }) {
  const active = !show ? "active" : "";

  return (
    <div className={"links lg:text-lg " + active}>
      {/* <Link to="./">Início</Link>
      <Link to="./sobre">Quem Somos</Link>
      <Link to="./projetos">Projetos e Campanhas</Link>
      <Link to="./transparencia">Transparência</Link>
      <Link to="./ajudar">Como ajudar</Link>
      <Link to="./contato">Contato</Link> */}

      <ul className="@[739px]:flex" onClick={(_) => setClose(false)}>
        <li>
          <Link to="./">Início</Link>
        </li>
        <li>
          <Link to="./sobre">Sobre</Link>
        </li>
        <li>
          <Link to="./projetos">Campanhas</Link>
        </li>
        <li>
          <Link to="./transparencia">Transparência</Link>
        </li>
        <li>
          <Link to="./ajudar">Ajudar</Link>
        </li>
        <li>
          <Link to="./contato">Contato</Link>
        </li>
      </ul>
    </div>
  );
}

// function mob() {}