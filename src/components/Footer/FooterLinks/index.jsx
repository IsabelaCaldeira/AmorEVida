import { Link } from 'react-router-dom';
import styles from './FotterLinks.module.scss';

export default function FooterLinks() {
    return (
        <div className={styles.footerLinks}>
            <div className={styles.footerLinks__section}>
                <Link to="./">
                    Início
                </Link>
            </div>
            <div className={styles.footerLinks__section}>
                <Link to="./sobre">
                    Quem Somos
                </Link>
                <div className={styles.subSection}>
                    <Link to="./historia">
                        Nossa História
                    </Link>
                    <Link to="./historia">
                        Diretoria e Gestão
                    </Link>
                    <Link to="./historia">
                        Missão, Visão e Valores
                    </Link>
                    <Link to="./historia">
                        Depoimentos
                    </Link>
                    <Link to="./historia">
                        Imprensa
                    </Link>
                </div>
            </div>
            <div className={styles.footerLinks__section}>
                <Link to="./projetos">
                    Projetos e Campanhas
                </Link>
                <div className={styles.subSection}>
                    <Link to="./historia">
                        A Casa
                    </Link>
                    <Link to="./historia">
                        Reciclagem
                    </Link>
                    <Link to="./historia">
                        Cursos
                    </Link>
                    <Link to="./historia">
                        Doações
                    </Link>
                </div>
            </div>
            <div className={styles.footerLinks__section}>
                <Link to="./transparencia">
                    Transparência
                </Link>
            </div>
            <div className={styles.footerLinks__section}>
                <Link to="./ajudar">
                    Como ajudar
                </Link>
                <div className={styles.subSection}>
                    <Link to="./historia">
                        Doações
                    </Link>
                </div>
            </div>
            <div className={styles.footerLinks__section}>
                <Link to="./contato">
                    Contato
                </Link>
                <div className={styles.subSection}>
                    <Link to="./historia">
                        Email
                    </Link>
                    <Link to="./historia">
                        Telefone
                    </Link>
                    <Link to="./historia">
                        Endereços
                    </Link>
                </div>
            </div>
        </div>
    )
}