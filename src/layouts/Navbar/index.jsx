import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import logo from "/assets/img/logo.png";
import { Button } from "/src/components/Button";

export default function Navbar() {
  const [mob, setMob] = useState(false);
  const active = mob ? "active" : "";
  const hide = !mob ? "active" : "";

  return (
    <nav className="@container navbar z-10">
      <div className="logo">
        <Link to="./">
          <img src={logo} alt="logo amor e vida" />
        </Link>
      </div>
 
      <div className={"links lg:text-lg " + hide}>
        <ul onClick={() => setMob(false)}>
          <NavLink path="/">INÍCIO</NavLink>
          <NavLink path="/sobre">QUEM SOMOS</NavLink>
          <NavLink path="/projetos">AÇÕES</NavLink>
          <NavLink path="/transparencia">TRANSPARÊNCIA</NavLink>
          <NavLink path="/ajudar">COMO AJUDAR</NavLink>
          <NavLink path="/contato">CONTATO</NavLink>
        </ul>
      </div>

      <div className="flex items-center">
        <Button colorful={true} padding={"4px 24px"}>
          DOAR
        </Button>

        <div className={"mobile p-4 ml-6 " + active} onClick={() => setMob((prevState) => !prevState)}>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ path, children }) => {
  let locate = useLocation().pathname;

  return (
    <li>
      <Link className={locate === path ? "active" : ""} to={path}>{children}</Link>
    </li>
  );
};
