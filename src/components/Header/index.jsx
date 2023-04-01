import styles from './Header.module.scss';
import logo from '../../public/assets/img/logo.png';
import { Link } from 'react-router-dom';
import Button from '../Button';
import HeaderLinks from '../HeaderLinks/Index';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to="./">
                    <img src={logo} alt="logo amor e vida" />
                </Link>
            </div>
            <div className={styles.header__links}>
                <HeaderLinks />
            </div>
            <div className={styles.header__botao}>
                <Button>Doar</Button>
            </div>
        </header>
    )
}
