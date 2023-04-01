import styles from './Cabecalho.module.scss';
import logo from '../../public/assets/img/logo.png';
import { Link } from 'react-router-dom';
import CabecalhoLinks from '../CabecalhoLinks/Index';
import Botao from '../Botao';

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__logo}>
                <Link to="./">
                    <img src={logo} alt="logo amor e vida" />
                </Link>
            </div>
            <div className={styles.cabecalho__links}>
                <CabecalhoLinks />
            </div>
            <div className={styles.cabecalho__botao}>
                <Botao>Doar</Botao>
            </div>
        </header>
    )
}
