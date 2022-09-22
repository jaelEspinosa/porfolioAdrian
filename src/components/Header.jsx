import React, { useState } from "react";
import styles from '../styles/Header.module.css'
import Menu from "./Menu";
import MenuDesk from "./MenuDesk";
import menu from '../img/menu.png'
import foto from '../img/perfil.jpeg'

const Header = () => {
  const [mostrarMenu, setMostrarMenu]= useState(false)  
  const handleMenu = () => setMostrarMenu(!mostrarMenu)
  return (
    <>
    <div className={styles.header}>
    <div style={{display:'flex', alignItems:'center'}}>
      <h1><span>A</span>drián<span>E</span>spinosa</h1>
      <div className={styles.fotoContain}>
        <img src={foto} alt='foto-perfil'/> 
      </div>
      </div>
     <div className={styles.svg}
          onClick={handleMenu}
          >
 {!mostrarMenu ? <img src={menu}></img> : <div className={styles.divVacio}></div>} 
    </div>
    
    <MenuDesk />
   
     </div>
     {mostrarMenu &&<Menu mostrarMenu={mostrarMenu} handleMenu={handleMenu}/>}
    </>
  );
};

export default Header;
