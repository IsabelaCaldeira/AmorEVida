import nordeste from "/assets/img/patrocinios/b-nordeste.png";
import bb from "/assets/img/patrocinios/bb.png";
import caixa from "/assets/img/patrocinios/cef.png";
import justica from "/assets/img/patrocinios/justica-trabalho.png";
import mpmg from "/assets/img/patrocinios/mp-mg.png";
import pmmc from "/assets/img/patrocinios/pm-mc.png";
import rf from "/assets/img/patrocinios/rf.png";
import santa from "/assets/img/patrocinios/sata-casa.png";
import tjmg from "/assets/img/patrocinios/tj-mg.png";

import "./styles.css";

export default function Slider() {
  const patrocinadores = [
    caixa,
    bb,
    rf,
    nordeste,
    mpmg,
    tjmg,
    pmmc,
    santa,
    justica,
    caixa,
    bb,
    rf,
    nordeste,
    mpmg,
    tjmg,
    pmmc,
    santa,
    justica,
  ];
  // console.log("🚀 ~ file: index.jsx:19 ~ FooterSlider ~ patrocinadores:", patrocinadores) ctrl + alt + l

  return (
    <section className="slider">
      {/* <div className="buttons"><button>  <img src={esquerda} alt="seta para a esquerda" /></button><button>  <img src={direita} alt="seta para a direita" /></button></div> */}

      <div className="slider-track">
        {patrocinadores.map((patrocinador, index) => (
          <div className="slide" key={index}>
            <img src={patrocinador} alt="patrocinador" />
          </div>
        ))}
      </div>

      {/* <div className="buttons"></div> */}
    </section>
  );
}
