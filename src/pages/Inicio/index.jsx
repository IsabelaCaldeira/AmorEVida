import Botao from "components/Botao";
import Banner from "../../components/Banner";
import banner from '../../public/assets/img/banner.png';
import styles from './Inicio.module.scss'

export default function Inicio() {
    return (

        <div className={styles.inicio}>
            <Banner
                img={banner}
                titulo="AMOR E VIDA"
            />
            <div className={styles.inicio__botao}>
                <p>Comover e Mover</p>
                <Botao>COMO AJUDAR</Botao>
            </div>
        </div>

    )
}