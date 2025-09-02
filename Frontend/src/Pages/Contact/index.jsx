import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact gap-4 max-w-6xl mx-auto pt-8 px-4">
      <div className="flex max-md:flex-col flex-wrap max-md:items-center justify-around mx-auto max-w-[inherit]">
        <div className="max-w-md md:pr-6">
          <h2 className="text-4xl sm:text-5xl font-light">Entre em Contato Conosco!</h2>
          <p className="text-lg text-gray-800 my-4">
            Para dúvidas, oportunidades de parcerias envie um email para casaamorevida@outlook.com ou uma mensagem
            usando o formulário ao lado:{" "}
          </p>
          <img src="/assets/img/IlustracaoContato.svg" alt="" />
        </div>

        <ContactForm />
      </div>

      <div className="mapas grid justify-center text-center w-full sm:w-max sm:max-w-7xl  py-6 px-6 md:px-10 lg:py-12 lg:px-20 mx-auto ">
        <div className="w-full">
          <h3 className="text-2xl md:text-3xl lg:text-4xl pb-4">Sede Administrativa e Casa de Acolhimento</h3>

          <iframe
            title="Amor e vida localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.904798101652!2d-43.86634122524798!3d-16.73160134672958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab54a642027c95%3A0x9b855e093d635c!2sR.%20Melo%20Viana%2C%20401%20-%20Morrinhos%2C%20Montes%20Claros%20-%20MG%2C%2039400-427%2C%20Brasil!5e0!3m2!1spt-BR!2sfr!4v1754738734048!5m2!1spt-BR!2sfr"
            className="w-full h-[25rem] sm:h-[20rem] md:w-[40rem] lg:w-[52rem] "
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>

          <p className="lg:text-lg text-zinc-700 my-4">
            R. Meste. Janjão, 85 - São José, Montes Claros - MG, 39400-353, Brasil.
            <br />
            Telefone: +55 (38) 8834-1899
            <br />
            Email: casaamorevida@outlook.com
            <br />
            CNPJ: 28.467.302/0001-93
          </p>
        </div>

        <hr className="w-full h-[1px] my-8 bg-slate-800" />

        <div className="">
          <h3 className="text-2xl md:text-3xl lg:text-4xl pb-4">Galpão de reciclagem</h3>
          <iframe
            title="Amor e vida localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.9888412199166!2d-43.86128268464971!3d-16.727408588477214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab54ae6d091ce3%3A0xac7bf1f9bc646107!2sAv.%20Ov%C3%ADdio%20de%20Abreu%2C%20419%20-%20Centro%2C%20Montes%20Claros%20-%20MG%2C%2039400-068!5e0!3m2!1spt-BR!2sbr!4v1680469995729!5m2!1spt-BR!2sbr"
            className="w-full h-[25rem] sm:h-[20rem] md:w-[40rem] lg:w-[52rem] "
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
          <p className="lg:text-lg text-zinc-700 my-4">
            Av. Ovídio de Abreu, 419, Centro - Montes Claros/Minas Gerais, <br /> CEP: 39400-068
          </p>
        </div>
      </div>
    </main>
  );
}

function ContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function sendEmail(e) {
    e.preventDefault();
    if (!(nome && email && mensagem)) {alert("PREENCHA TODOS OS CAMPOS!");return;}
    const url = `mailto:casaamorevida@outlook.com?subject=Amorevida Site Contato De ${nome}&cc=${email}&body=${mensagem}`;
    window.open(url);
    alert("EMAIL ENVIADO COM SUCESSO!");
  }

  return (
    <div className="form max-w-2xl w-fit">
      <div className="helpInput pt-2">
        <form action={handleSubmit} method="post" target="_blank">
          <fieldset>
            <div className="">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                name="nome"
                id="nome"
                onChange={(e) => setNome(e.target.value)}
                value={nome}
                placeholder="Escreva aqui o seu nome completo"
                required
              />
            </div>
            <div className="my-6">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Escreva aqui o seu e-mail"
                required
              />
            </div>
          </fieldset>

          <div>
            <label htmlFor="assunto" className="pb-1">
              Como podemos te ajudar?
            </label>
            <textarea
              name="assunto"
              id="assunto"
              placeholder="Escreva aqui a sua mensagem"
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button
            className="cbutton text-white bg-red-800 w-full px-8 py-2 mt-4 font-bold"
            type="submit"
            onClick={sendEmail}
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}
