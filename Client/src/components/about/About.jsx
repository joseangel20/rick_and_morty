import foto from "../../assets/img/foto3.jpg";
import styles from "./about.module.css";
const About = () => {
  const hardSkills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "WEBPACK",
    "LESS",
    "...",
  ];
  const listHardSkills = hardSkills.map((hardSkill, index) => {
    return <li key={index}>{hardSkill}</li>;
  });

  return (
    <div className={styles.container_about}>
      <div className={styles.perfil}>
        <img src={foto} alt="Jose Angel" width={300} />
        <h2>JOSE GARCIA</h2>
      </div>
      <div className={styles.detail}>
        <p>
          Muchas gracias por dedicar gran parte de su tiempo para observar este
          proyecto.
        </p>
        <p>
          Esta SPA, ha sido un trabajo de un proyecto integrador que tiene como
          objetivo aplicar los conceptos aprendido en el Bootcamp(Henry). 
        </p>
        <p>Pues
          aquí ahí parte de los conocimientos que he adquirido.</p>
        <p>Espera esto no acaba aquí, iré a por más.</p>
        <h4>Hard Skill</h4>
        <ul>{listHardSkills}</ul>
      </div>
    </div>
  );
};

export default About;
