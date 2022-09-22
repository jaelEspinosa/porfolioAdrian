import React from 'react'
import styles from "../styles/Proyectos.module.css";
import youtube from '../img/youtube.png'



const ProyectoCard = ({proyecto}) => {

    console.log(proyecto.imagen)
  return (
    <article className={styles.proyecto}>
    <h2 className={styles.title}>{proyecto.nombre}</h2>
        <div className={styles.cardContain}>
          <div className={styles.fotoContain}>
            <img className={styles.imagen} src={proyecto.imagen} alt="weather-app" />           
          </div>          
        <div className={styles.divide}></div>        
           <div className={styles.rrssContain}>
            <a  href={proyecto.urlyoutube}
                target="_blank"
              >
              <img className={styles.rrss} src={youtube} alt="youtube" />
              </a>
              <a href={proyecto.urlyoutube}>
              <span className={styles.span}>Ver el video</span>   
              </a>          
            </div>            
          </div>
          <p>{proyecto.description}</p>
          <div className={styles.linea}></div>
      </article>
  )
}

export default ProyectoCard