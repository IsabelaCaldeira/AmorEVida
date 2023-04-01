import styles from './FooterInfo.module.scss';
import logo from '../../../public/assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function FooterInfo() {
    return (
        <div className={styles.footerInfo}>
        <div className={styles.footerInfo__contato}>
            <p>CNPJ: 28.467.302/0001-93</p>
            <p>Galpão de reciclagem: Av. Ovídio de Abreu, 419, Centro - Montes Claros/MG, 39400-068</p>
            <p>Sede Administrativa e casa de acolhimento: Rua Mestre Janjão, 85, São José - Montes Claros/MG, 39400-353</p>
            <p>Telefone: +55 (38) 98858-5246</p>
            <p>Email: casaamorevida@outlook.com</p>
        </div>
        <div className={styles.footerInfo__logo}>
            <Link to="./">
                <img src={logo} alt="logo amor e vida" />
            </Link>
        </div>
    </div>
    )
}