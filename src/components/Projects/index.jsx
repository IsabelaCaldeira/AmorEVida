import React from "react";
import styles from './Projects.module.scss';
import projetos from '../json/db.json';
import Cards from './Cards';
import { useState } from "react";
// import { Container } from './styles';

export default function Projects() {

  const [itens] = useState(projetos.slice(1));

  return (
    <section className={styles.projetos}>
      <div className={styles.projetos__titulo}>
        <h2>Projetos e Campanhas</h2>
      </div>
      <div className={styles.projetos__cards}>
        <Cards itens={itens} styles={styles} />
      </div>
    </section>
  )
}