import "./hero.css";

const Hero = () => {
  const linkedinURL = "coloque_seu_linkedin_aqui";
  const githubURL = "coloque_seu_github_aqui";

  return (
    <section id="about" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./memoji.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">Marina Matulle: Desenvolvedora Full Stack</h1>
        <p className="subtitle">
          Oi, eu sou a Marina! Sou uma desenvolvedora Full Stack apaixonada por
          tecnologia e inovação. Durante minha jornada na programação, já
          trabalhei com: JavaScript, Java, React, Angular, Ionic, Node e Spring
          Boot. Além da programação, também gosto muito do motion design, no
          qual possuo experiência utilizando a ferramenta Adobe After Effects.
        </p>

        <div className="all-icons flex">
          <a href={'https://github.com/marimatulle'} target="_blank" rel="noopener noreferrer">
            <div className="icon icon-github"></div>
          </a>
          <a href={'https://www.linkedin.com/in/marina-matulle-24b445248/'} target="_blank" rel="noopener noreferrer">
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation">animation</div>
    </section>
  );
};

export default Hero;
