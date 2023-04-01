import styles from './Banner.module.scss';

const Banner = ({img, titulo}) => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner__image}>
                <img src={img} alt={titulo} />
            </div>
            <div className={styles.banner__text}>
                <h1>{titulo}</h1>
            </div>
        </div>
    )
}

export default Banner;