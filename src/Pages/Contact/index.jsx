import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Entre em Contato Conosco!</h1>
      <div className="mapas">
        <div className="">
          <p>Sede Administrativa e Casa de Acolhimento</p>
          <p>Rua Mestre Janjao, 85, São José - Montes Claros/Minas Gerais, CEP: 39400-353<br />
            Telefone: +55 (38) 88341-899<br />
            Email: casaamorevida@outlook.com<br />
            CNPJ: 28.467.302/0001-93</p>
          <iframe
            title="Amor e vida localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.0966592747923!2d-43.86245262422559!3d-16.722028246481752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab54ad2b6045cb%3A0xd4ef28660f9f656!2sR.%20Mte.%20Janj%C3%A3o%2C%2085%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Montes%20Claros%20-%20MG%2C%2039400-353!5e0!3m2!1spt-BR!2sbr!4v1683408506865!5m2!1spt-BR!2sbr"
            width="654px"
            height="341px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <p>Galpão de reciclagem</p>
          <p>Av. Ovídio de Abreu, 419, Centro - Montes Claros/Minas Gerais, <br /> CEP: 39400-068</p><br /><br />
          <iframe
            title="Amor e vida localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.9888412199166!2d-43.86128268464971!3d-16.727408588477214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab54ae6d091ce3%3A0xac7bf1f9bc646107!2sAv.%20Ov%C3%ADdio%20de%20Abreu%2C%20419%20-%20Centro%2C%20Montes%20Claros%20-%20MG%2C%2039400-068!5e0!3m2!1spt-BR!2sbr!4v1680469995729!5m2!1spt-BR!2sbr"
            width="654px"
            height="341px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="form">
        <h2>Envie a sua mensagem</h2>
        <p>
          Para dúvidas, oportunidades de parcerias envie um email para
          casaamorevida@outlook.com ou uma mensagem usando o formulário abaixo:
        </p>
        <div className="entradas">
          <FormularioContato />
        </div>
      </div>
    </div>
  );
}

function FormularioContato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const url = `mailto:casaamorevida@outlook.com?subject=ContatoSite&body=${mensagem}`;
    window.open(url);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pessoais">
        <label>
          Nome
        </label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div className="mensagem">
        <label>
          Como podemos te ajudar?
          <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
        </label>
        <BotaoEnviar />
      </div>
    </form>
  );
}

function BotaoEnviar() {
  return (
    <button type="submit">Enviar</button>
  );
}

