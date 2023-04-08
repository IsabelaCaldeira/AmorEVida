import styles from './About.module.scss';
import { useState } from 'react';
import projetos from '../../components/json/db.json';
import banner from '../../public/assets/img/banner-about.png';
import Banner from 'components/Banner';

export default function About() {

    const [item] = useState(projetos[0]);

    return (
        <article className={styles.about}>
            <Banner
                img={banner}
                titulo="QUEM SOMOS"
            />
            <div className={styles.about__inicio}>
                <img src={item.imagem} alt={item.titulo} />
                <p>{item.texto}</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.cards__card}>
                        <h2>Missão</h2>
                    <div className={styles.cards__quadrado}>
                        <p>Acolher e capacitar pessoas em situação de vulnerabilidade social, juntamente com auxílio de parcerias, restaurando sua dignidade e bem estar social.</p>
                    </div>
                </div>
                <div className={styles.cards__card}>
                        <h2>Visão</h2>
                    <div className={styles.cards__quadrado}>
                        <p>Ser referência no apoio a pessoas em vulnerabilidade, auxiliando famílias e contribuindo para o desenvolvimento social no Norte de Minas Gerais.</p>
                    </div>
                </div>
                <div className={styles.cards__card}>
                        <h2>Valores</h2>
                    <div className={styles.cards__quadrado}>
                        <p>Solidariedade, Disciplina, Respeito e Equidade.</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

