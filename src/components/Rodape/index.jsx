import CabecalhoLinks from 'components/CabecalhoLinks/Index';
import styles from './Rodape.module.scss';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__links}>
            <CabecalhoLinks />
            </div>
        </footer>
    )
}