import Banner from "../../components/Banner";
import banner from '../../public/assets/img/banner.png';
import styles from './Home.module.scss';
import Button from "components/Button";

export default function Home() {
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
        </div>
    )
}