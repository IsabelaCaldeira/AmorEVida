import Banner from "components/Banner";
import banner from '../../public/assets/img/banner-doar.png';
import styles from './Donate.module.scss';

export default function Donate() {
    return (
        <div className={styles.donate}>
            <Banner
                img={banner}
                titulo="DOAR"
            />
        </div>
    )
}