import { Link } from "react-router-dom";
import styles from './HeaderLinks.module.scss';

export default function HeaderLinks() {
    return (
        <section className={styles.headerLinks}>
            <Link to="./">
                Início
            </Link>
            <Link to="./sobre">
                Quem Somos
            </Link>
            <Link to="./projetos">
                Projetos e Campanhas
            </Link>
            <Link to="./transparencia">
                Transparência
            </Link>
            <Link to="./ajudar">
                Como ajudar
            </Link>
            <Link to="./contato">
                Contato
            </Link>
        </section>
    )
}