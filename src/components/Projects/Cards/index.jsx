import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';
import Button from 'components/Button';

export default function Cards({ itens }) {
  return (
    <div className={styles.cardEstrutura}>
      {itens.map((item, index) => {
        // Adiciona a classe com a cor desejada apenas nos 4 primeiros itens
        const h3Class = index < 4 ? styles.textoVermelho : styles.textoVerde;
        return (
            <div key={item.id} className={styles.card}>
              <div className={styles.card__icone}>
                <img src={item.icone} alt={item.titulo} />
              </div>
              <div className={styles.card__descricao}>
                <h3 className={h3Class}>{item.tipo}</h3>
                <h4>{item.titulo}</h4>
                <div className={styles.card__resumo}>
                  <p>{item.resumo}</p>
                </div>
                <Link to={`/projeto/${item.id}`} key={item.id}>
                <Button>Saiba Mais</Button>
                </Link>
              </div>
            </div>
        )
      })}
    </div>
  )
}
