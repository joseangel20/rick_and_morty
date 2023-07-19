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
  const listHardSkills = hardSkills.map((hardSkill) => {
    return <li>{hardSkill}</li>;
  });

  return (
    <div>
      <img src="" alt="" />
      <h1>Hola soy Jose Garcia</h1>
      <p>
        Muchas gracias por observar y dedicar gran parte de su tiempo para
        observar este proyecto.
      </p>
      <p>
        Esta SPA ha sido un trabajo de un proyecto integrador que tiene como
        objetivo aplicar los conceptos aprendido en el Bootcamp(Henry). Pues
        aquí ahí parte de lo que pueden imaginarse de lo que puedo ser capaz
        realizar.
      </p>
      <h3>Hard Skill</h3>
      <ul>{listHardSkills}</ul>
    </div>
  );
};

export default About;
