import { useEffect, useState } from "react";
import Banner from "../../layouts/Banner";
import "./Transparency.css";
import download from "/assets/icons/download.png";
import banner from "/assets/img/banner-transparency.png";

export default function Transparency() {

  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/brunoholanda/amor-e-vida-db/transparencia")
      .then(resposta => resposta.json())
      .then(dados => {
        setDocumentos(dados);

      });
  }, []);

  return (
    <article>
      <Banner img={banner} titulo="TRANSPARÊNCIA" />
      <div className="max-w-4xl mx-auto">
        <div className="transparencia mt-20">
          <h1>Portal da Transparência</h1>
          <p className="mb-20">Quer conhecer melhor os dados documentais do nosso projeto? Aqui você pode consultar os Demonstrativos Financeiros, Relatórios de atividades, Estatuto Social e Certificações. Prezamos pela transparência com nossos apoiadores, patrocinadores e doadores, e ficamos muito satisfeitos em poder compartilhar com vocês nossos resultados! Escolha o ano e faça o download dos documentos que quiser.</p>
        </div>
        <div className="botoes mb-20">
          {documentos.length > 0 ? (
            documentos.map((documento) => <BotaoArquivo {...documento} key={documento.id} />)
          ) : (
            <p>Desculpe, documentos indisponiveis! Tente mais tarde...</p>
          )}
        </div>
      </div>
    </article>

  );
}

function BotaoArquivo({ titulo, link }) {
  return (
    <div className="botao">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>
          {titulo}
          <img src={download} alt="icone para baixar arquivos do portal da transparencia" />
        </button>
      </a>
    </div>
  );
}
