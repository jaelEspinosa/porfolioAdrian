import React from 'react'
import styles from '../styles/FormError.module.css'
const FormError = ({error}) => {
if (error=== undefined) return null   
  return (
    <div className={styles.error}>
         {error.type && <>
             {error.type === "required" && <span>*Campo requerido</span>}
             {error.type === "pattern" && <span>*Correo no válido</span>}
             {error.type === "minLength" && <span>*Demasiado corto</span>}
        </>}
    </div>
  )
}

export default FormError