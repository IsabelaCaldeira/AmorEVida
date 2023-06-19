import { useState } from "react";
import { accordion } from "../../constants/db.jsx";
import Banner from "../../layouts/Banner";
import "./Donate.css";
import banner from "/assets/img/banner-doar.png";

export default function Donate() {
  return (
    <div className="ajudar">
      <Banner img={banner} titulo="COMO AJUDAR" />

      <div className="doacoes mx-auto my-20 p-10 max-w-5xl items-center justify-items-center justify-center grid">
        <h2 className="text-6xl font-light ">Doações</h2>

        <Accordion props={accordion} />
      </div>
    </div>
  );
}

const Accordion = ({ props }) => {
  return (
    <div className="Accordions my-6 mt-10 max-w-3xl ">
      {props.map((prop) => (
        <Faq key={prop.id} {...prop} />
      ))}
    </div>
  );
};

const Faq = ({ icon, title, cat, type, color="green", paragraphs }) => {
  const [active, setActive] = useState(false);
  const isActive = active ? "active" : "";

  return (
    <div className={"accordion cursor-pointer " + isActive} onClick={() => setActive(!active)}>
      <div className={"question bg-white p-5 flex items-center justify-between border-solid border-b border-[#ccc] rounded-xl"}>
        <div className="flex items-center ">
          <img src={icon} className="mr-3 w-[70px] h-[70px]" alt="" />
          <h3 className="text-5xl font-light">{cat}</h3>
        </div>

        <div className="cross">
          <i></i>
          <i></i>
        </div>
      </div>

      <div className="answer bg-white">
        <div className="grid p-8 ">
          <div className="pb-3">
            <span className={color}>{type}</span>
            <h3 className="text-2xl">{title}</h3>
          </div>

          {paragraphs}
        </div>
      </div>
    </div>
  );
};

