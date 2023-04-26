import "./styles.css";
import erro404 from "./404.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navegar = useNavigate();

  return (
    <section className="home">
      <img src={erro404} alt="imagem da pagina de erro" />
      <div>
        <h1>Ops... Pagina não encontrada... Clique em voltar!</h1>
        <div onClick={() => navegar(-1)}>
          <button className="btn">VOLTAR</button>
        </div>
      </div>
    </section>
  );
}
