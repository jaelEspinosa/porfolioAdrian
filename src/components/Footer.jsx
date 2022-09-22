import React from 'react'
import styles from '../styles/Footer.module.css'
import gmail from '../img/gmail.png'
import instagram from '../img/instagram.png'
import face from '../img/facebook.png'

const Footer = () => {
  return (
    <div className={styles.footer}>

       <a href='mailto:adrianespinosaoviedo@hotmail.com	'> <img src={gmail} alt='logo-mail'/> </a>   
     
      <a href='#' target='_blank'><img src={instagram} alt='logo-linkedin'/></a> 
      <a href='#' target='_blank'><img src={face} alt='Descargar-CV'/></a>  
    </div>
  )
}

export default Footer