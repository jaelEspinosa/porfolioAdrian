import React from "react";
import styles from "../styles/About.module.css";
import foto from "../img/perfil.jpeg";

const About = () => {
  return (
    <div className={styles.contain}>
      {/* <figure className={styles.containFoto}>
      <img className={styles.foto} src={foto} alt='foto-perfil'/>
    </figure> */}
      <article>
        <h2>Acerca de mí.</h2>
        <figure className={styles.containFoto}>
          <img className={styles.foto} src={foto} alt="foto-perfil" />
        </figure>
        
        <p>
          Cantante y, desde 2020, actor de teatro musical, llevo trabajando en
          mi técnica vocal y capacidad interpretativa en la música desde la
          adolescencia y, actualmente, estoy dando mis primeros pasos en el
          mundo del teatro musical. Desde los 15 años, sentí que cantar era algo
          que podía hacer horas y horas sin cansarme, y sin aburrirme, y siempre
          he sentido una gran ambición por mejorar día a día y alcanzar esas
          habilidades que me permitiesen dedicarle mi vida a hacer disfrutar a
          los demás con mi voz.
        </p>

        <p>
          Desde pequeño, la gente de mi alrededor siempre ha remarcado mi “voz
          Disney” y mis características cantando y en el timbre de mi voz para
          dedicarme al mundo del musical. Fue en 2020 cuando, afortunadamente,
          conocí al director de la compañía gaditana The Musical Comedy, quien
          me invitó a su show musical infantil basado en Inside Out, “Una
          Navidad Emocionante”, interpretando al personaje ‘Ira’.
          Posteriormente, se me ofreció interpretar como cover de dicho director
          a ‘Doody’ y ‘Vince Fontaine’ en el musical Rydell High School, Tributo
          a Grease, interpretando además tres canciones solistas de dichos
          personajes: ‘Mágicas Notas’, ‘Soy el ritmo’ y ‘Joven Frustrada’.
        </p>

        <p>
          Actualmente, sigo siendo parte del elenco de Rydell High School, y
          pertenezco a la Coral Polifónica de Capuchinos situada en Jerez,
          mientras busco nuevos proyectos donde poder aportar mis capacidades
          artísticas y seguir aprendiendo.
        </p>
       
      </article>
    </div>
  );
};

export default About;
