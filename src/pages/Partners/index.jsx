import Banner from "components/Banner";
import banner from '../../public/assets/img/banner-about.png';
import styles from './Partners.module.scss';

export default function Partners() {
    return (
        <div className={styles.partners}>
            <Banner
                img={banner}
                titulo="NOSSOS PARCEIROS"
            />
        </div>
    )
}