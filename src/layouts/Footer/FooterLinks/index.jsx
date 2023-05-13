import { Link } from "react-router-dom";
import "./FotterLinks.css";

export default function FooterLinks() {
  return (
    <section className="footerLinks pt-8 max-md:justify-evenly justify-between max-sm:flex-col flex-row">
      <div className="section">
        <h3>
          <Link to="./">INÍCIO</Link>
        </h3>
      </div>

      <div className="section">
        <h3>
          <Link to="./sobre">QUEM SOMOS</Link>
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
              <Link to="./imprensa">Imprensa</Link>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="section w-48">
        <h3> <Link to="./projetos">AÇÕES</Link> </h3>

        <div>
          <h3>
            <Link to="./projetos">Projetos</Link>
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
                <Link to="./cursos">Cursos</Link>
              </li>
              <li>
                <Link to="./historia">Doações</Link>
              </li>
            </ul>
          </div>
        </div>
    
        <div>
         <h3>
            <Link to="./projetos">Campanhas</Link>
          </h3>
          <div className="subSection">
            <ul>
              <li>
                <Link to="./historia">Filho de catador pode ser doutor!</Link>
              </li>
              <li>
                <Link to="./historia">Aqueça uma família</Link>
              </li>
              <li>
                <Link to="./historia">Quem cata merece casa</Link>
              </li>
              <li>
                <Link to="./historia">Alimente uma vida</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>
          <Link to="./transparencia">TRANSPARÊNCIA</Link>
        </h3>
        <div className="subSection">
          <ul>
            <li>
              <Link to="./ajudar">Portal da Transparência</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h3>
          <Link to="./ajudar">COMO AJUDAR</Link>
        </h3>
        <div className="subSection">
          <ul>
            <li>
              <Link to="./ajudar">Doações</Link>
            </li>
            <li>
              <Link to="./ajudar">financeira</Link>
            </li>
            <li>
              <Link to="./ajudar">voluntariado</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h3 className="text-xl font-bold opacity-90">
          <Link>CONTATO</Link>
        </h3>

        <div className="subSection">
          <ul className="">
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
