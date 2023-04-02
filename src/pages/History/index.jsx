import Banner from "components/Banner";
import banner from '../../public/assets/img/banner-about.png';
import styles from './History.module.scss';

export default function History() {
    return (
        <div className={styles.history}>
            <Banner
                img={banner}
                titulo="NOSSA HISTÓRIA"
            />
        </div>
    )
}