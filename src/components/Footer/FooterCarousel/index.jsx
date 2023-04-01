import styles from './FooterCarousel.module.scss';
import direita from '../../../public/assets/icons/arrow-direita.png';
import esquerda from '../../../public/assets/icons/arrow-esquerda.png';
import caixa from '../../../public/assets/img/patrocinios/cef.png';
import bb from '../../../public/assets/img/patrocinios/bb.png';
import rf from '../../../public/assets/img/patrocinios/rf.png';
import nordeste from '../../../public/assets/img/patrocinios/b-nordeste.png';
import mpmg from '../../../public/assets/img/patrocinios/mp-mg.png';
import tjmg from '../../../public/assets/img/patrocinios/tj-mg.png';
import pmmc from '../../../public/assets/img/patrocinios/pm-mc.png';
import santa from '../../../public/assets/img/patrocinios/sata-casa.png';
import justica from '../../../public/assets/img/patrocinios/justica-trabalho.png';
import { useRef } from 'react';

export default function FooterCarousel() {

  const carrossel = useRef(null);

  const patrocinadores = [
    { imagem: caixa },
    { imagem: bb },
    { imagem: rf },
    { imagem: nordeste },
    { imagem: mpmg },
    { imagem: tjmg },
    { imagem: pmmc },
    { imagem: santa },
    { imagem: justica }
  ];

  const handleLftClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  }

  return (
    <section className={styles.carrossel}>
      <div className={styles.carrossel__botoes}>
        <button onClick={handleLftClick}><img src={esquerda} alt="seta para a esquerda" /></button>
      </div>
      <div className={styles.carrossel__images} ref={carrossel}>
        {patrocinadores.map((patrocinador, index) => (
          <img key={index} src={patrocinador.imagem} alt="patrocinador" />
        ))}
      </div>
      <div className={styles.carrossel__botoes}>
        <button onClick={handleRightClick}><img src={direita} alt="seta para a direita" /></button>
      </div>
    </section>
  );
}
