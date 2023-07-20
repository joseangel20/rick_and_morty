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
    <div>
      <img src="" alt="" />
      <h1>Hola soy Jose Garcia</h1>
      <p>
        Muchas gracias por dedicar gran parte de su tiempo para
        observar este proyecto.
      </p>
      <p>
        Esta SPA ha sido un trabajo de un proyecto integrador que tiene como
        objetivo aplicar los conceptos aprendido en el Bootcamp(Henry). Pues
        aquí ahí parte de los conocimientos que he adquirido.
      </p>
      <p>Espera esto no acaba aquí, iré a por más.</p>
      <h3>Hard Skill</h3>
      <ul>{listHardSkills}</ul>
    </div>
  );
};

export default About;
