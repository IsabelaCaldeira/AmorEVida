import { Link } from "react-router-dom";
import styles from './FooterSocial.module.scss';
import insta from '../../../public/assets/icons/insta.png';
import fb from '../../../public/assets/icons/fb.png';
import yt from '../../../public/assets/icons/yt.png';

export default function FooterSocial() {
    return (
        <div className={styles.footerSocial}>
            <div className={styles.footerSocial__redes}>
                <Link to="https://www.instagram.com/amorevida.casa/">
                    <img src={insta} alt="icone do instagram" />
                </Link>
            <Link to="https://www.instagram.com/amorevida.casa/">
                <img src={fb} alt="icone do instagram" />
            </Link>
            <Link to="https://www.youtube.com/@casadeacolhimentoamorevida1838/featured">
                <img src={yt} alt="icone do instagram" />
            </Link>
            </div>
            <div className={styles.footerSocial__direitos}>
                <p>© 2023 Amor e Vida: Comover e Mover</p>
            </div>
        </div>
    )
}