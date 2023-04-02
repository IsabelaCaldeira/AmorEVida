import Banner from "components/Banner";
import banner from '../../public/assets/img/banner-transparency.png';
import styles from './Transparency.module.scss';

export default function Transparency() {
    return (
        <div className={styles.transparency}>
            <Banner
                img={banner}
                titulo="TRANSPARENCIA"
            />
        </div>
    )
}