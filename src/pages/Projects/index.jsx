import Banner from "components/Banner";
import banner from '../../public/assets/img/banner-projects.png';
import styles from './Projects.module.scss';

export default function Projetos() {
    return (
        <div className={styles.projetos}>
            <Banner
                img={banner}
                titulo="NOSSOS PROJETOS"
            />
        </div>
    )
}