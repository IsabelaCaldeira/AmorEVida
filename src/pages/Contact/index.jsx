import styles from './Contact.module.scss';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <h1>Entre em Contato Conosco!</h1>
            <div className={styles.contact__mapa}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.9888412199166!2d-43.86128268464971!3d-16.727408588477214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab54ae6d091ce3%3A0xac7bf1f9bc646107!2sAv.%20Ov%C3%ADdio%20de%20Abreu%2C%20419%20-%20Centro%2C%20Montes%20Claros%20-%20MG%2C%2039400-068!5e0!3m2!1spt-BR!2sbr!4v1680469995729!5m2!1spt-BR!2sbr"
                    width="654px"
                    height="341px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={styles.contact__form}>
                <h2>Envie a sua mensagem</h2>
                <p>Para dúvidas, oportunidades de parcerias envie um email para casaamorevida@outlook.com ou uma mensagem usando o formulário abaixo:  </p>
            </div>
        </div>
    )
}