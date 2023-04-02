import Projects from "components/Projects";
import Banner from "../../components/Banner";
import banner from '../../public/assets/img/banner.png';
import styles from './Home.module.scss';
import Button from "components/Button";
import projetos from '../../components/json/db.json';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [item] = useState(projetos[0]);


    return (
        <div className={styles.home}>
            <Banner
                img={banner}
                titulo="AMOR E VIDA"
            />
            <div className={styles.home__button}>
                <p>Comover e Mover</p>
                <Button>COMO AJUDAR</Button>
            </div>
            <div className={styles.home__about}>
                <div>
                <h2>{item.titulo}</h2>
                <p>{item.resumo}</p>
                <Link to="/sobre">
                    <Button>Saiba Mais</Button>
                </Link>
                </div>
                <div>
                <img src={item.imagem} alt={item.titulo} />
                </div>
            </div>
            <div className={styles.home__cards}>
                <Projects />
            </div>
        </div>
    )
}