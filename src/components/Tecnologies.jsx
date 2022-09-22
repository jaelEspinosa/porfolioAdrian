import React from 'react'
import styles from '../styles/Tecnologies.module.css'
import angular from '../img/Angular.png'
import atom from '../img/atom.png'
import html5 from '../img/html5.png'
import javascript from '../img/java-script.png'
import css3 from '../img/css-3.png'
import node from '../img/node.png'
import sass from '../img/sass.png'
const Teconolgies = () => {
  return (
    <div className={styles.contain}>
      <img  className={styles.icons} src={angular} alt='angular' />
      <img  className={styles.icons} src={atom} alt='atom' />
      <img  className={styles.icons} src={node} alt='node' />
      <img  className={styles.icons} src={javascript} alt='javascript' />
      <img  className={styles.icons} src={css3} alt='css3' />
      <img  className={styles.icons} src={html5} alt='html5' />
      <img  className={styles.icons} src={sass} alt='sass' />

    </div>
  )
}

export default Teconolgies