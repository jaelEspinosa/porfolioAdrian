
import { proyectos } from "../data/proyectos";
import ProyectoCard from "../components/ProyectoCard";
import React from "react";
import styles from "../styles/Proyectos.module.css";

const Proyectos = () => {
  return (
    
    <div className={styles.contain}>
    {proyectos.map(proyecto=>(
      <ProyectoCard key={proyecto.id} proyecto={proyecto}/>
    ))}
    
      
      
    </div>
  );
};

export default Proyectos;
