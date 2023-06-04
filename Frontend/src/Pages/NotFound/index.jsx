import { useNavigate } from "react-router-dom";
import erro404 from "./404.png";
import "./styles.css";

export default function NotFound() {
  const navegar = useNavigate();

  return (
    <section className="erro img-nos max-w-4xl mx-auto">
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
