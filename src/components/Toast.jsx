import React from 'react'
import styles from '../styles/Toast.module.css'

const Toast = () => {
  return (
    <div className={styles.toast}>
        <h1 className={styles.mensaje}>Email enviado</h1>
    </div>
  )
}

export default Toast