import styles from './Footer.module.scss';
import HeaderLinks from 'components/HeaderLinks/Index';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__links}>
                <HeaderLinks />
            </div>
        </footer>
    )
}