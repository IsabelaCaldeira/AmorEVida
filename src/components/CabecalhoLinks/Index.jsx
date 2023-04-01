import { Link } from "react-router-dom";
import styles from './CabecalhoLinks.module.scss';

export default function CabecalhoLinks() {
    return (
        <section className={styles.cabecalhoLinks}>
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