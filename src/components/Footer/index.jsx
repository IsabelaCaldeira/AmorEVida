import FooterLinks from 'components/Footer/FooterLinks';
import styles from './Footer.module.scss';
import FooterInfo from 'components/Footer/FooterInfo';
import FooterSocial from './FooterSocial';
import FooterCarousel from './FooterCarousel';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <FooterLinks />
            </div>
            <div className={styles.footer__contato}>
                <FooterInfo/>
            </div>
            <div className={styles.footer__social}>
                <FooterSocial />
            </div>
            <div className={styles.footer__carrossel}>
                <FooterCarousel />
            </div>
        </footer>
    )
}