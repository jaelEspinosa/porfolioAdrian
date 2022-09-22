import React, { useState } from "react";
import styles from "../styles/Contacto.module.css";
import { useForm } from "react-hook-form";
import FormError from "../components/FormError";
import axios from "axios";
import Toast from "../components/Toast";
import Spiner from "../components/Spiner";
import { useNavigate } from "react-router-dom";


const Curriculum = () => {
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post(
        "https://formsubmit.co/ajax/1a5d1523fcea108f375076c83361c5d4",
        data
      );
      setLoading(false);
      setSend(true);

      setTimeout(() => {
        setSend(false);
        navigate('/')
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario}>
        {loading && <Spiner />}
        {send && <Toast />}
        <h2>Contáctame</h2>
        <div className={styles.input}>
          <label htmlFor="nombre">Nombre</label>
          <input 
            className={styles.campo}
            {...register("nombre", { required: true, minLength: 6 })}
            type="text"
            id="nombre"
            name="nombre"
          />
          <FormError error={errors.nombre} />
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>

          <input
            className={styles.campo}
            {...register("email", {
              pattern:
                /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
              required: true,
            })}
            type="text"
            id="email"
            name="email"
          />
          <FormError error={errors.email} />
        </div>
        <div className={styles.input}>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
           className={styles.campo}
            name="mensaje"
            id="mensaje"
            cols="38"
            rows="10"
            {...register("mensaje", { required: true, minLength: 25 })}
          />
          <FormError error={errors.mensaje} />
        </div>
        <input className={styles.button} type="submit" value="ENVIAR" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:5173" />
      </form>

    </>
  );
};

export default Curriculum;
