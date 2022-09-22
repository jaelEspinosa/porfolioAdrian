import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Menu.module.css'
import home from '../img/home.png'
import about from '../img/about.png'
import contact from '../img/contact.png'
import proyects from '../img/proyects.png'
import close from '../img/close.png'

const Menu = ({handleMenu}) => {
  return (
    <nav>
    <ul className={styles.mobile}>
    <div
            onClick={handleMenu} 
            className={styles.cerrar}
            ><img className={styles.icons}src={close} alt='close'/>
        </div>

        <Link onClick={handleMenu} to={'/'}><li className={styles.itemmobile}><img className={styles.icons}src={home} alt='home'/> Inicio</li></Link>
        <Link onClick={handleMenu} to={'/about'}><li className={styles.itemmobile}><img className={styles.icons}src={about} alt='aboutme'/> Acerca de mi</li></Link>
        <Link onClick={handleMenu} to={'/proyectos'}><li className={styles.itemmobile}><img className={styles.icons}src={proyects} alt='proyects'/>Experiencia</li></Link>
        <Link onClick={handleMenu} to={'/contacto'}><li className={styles.itemmobile}><img className={styles.icons}src={contact} alt='contact'/>Contacto</li></Link> 
    </ul>
 
</nav>
  )
}

export default Menu