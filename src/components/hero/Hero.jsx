import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
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
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation">animation</div>
    </section>
  );
};

export default Hero;
