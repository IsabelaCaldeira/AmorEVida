import Banner from "components/Banner";
import banner from '../../public/assets/img/banner-projects.png';
import fluxo from '../../public/assets/img/fluxograma.png';
import styles from './Projects.module.scss';
import projetos from '../../components/json/db.json';
import { useState } from "react";
import CollapseMenu from "components/CollapseMenu";


export default function Projetos() {

    const [item] = useState(projetos[1]);

    return (
        <div className={styles.projetos}>
            <Banner
                img={banner}
                titulo="NOSSOS PROJETOS"
            />
            <div className={styles.projetos__post}>
                <h2>A Casa de Acolhimento</h2>
                <p>{item.texto}</p>
                <h3>Fluxo do Processo da Casa de Acolhimento </h3>
                <img src={fluxo} alt="fluxograma da casa de acolhimento amor e vida" />
                <h3>Detalhamento do Processo <br></br>da Casa de Acolhimento</h3>
            </div>
            <div className={styles.projetos__collapse}>
                <CollapseMenu />
            </div>
        </div>
    )
}

