import "./main.css";

const Main = () => {
  const cardData = [
    {
      image: "./frontend-adoti.png",
      title: "Login Page Adoti",
      subtitle: "Página de login feita em HTML, CSS e JavaScript para um projeto de adoção de animais.",
      githubLink: "https://github.com/marimatulle/frontend-adoti",
      websiteLink: "https://marimatulle.github.io/frontend-adoti/",
    },
    {
      image: "./backend-api-adoti.png",
      title: "API Adoti",
      subtitle: "API feita em Node e Express para um projeto de adoção de animais.",
      githubLink: "https://github.com/marimatulle/backend-adoti",
    },
    {
        image: "./ionic-letracaixa-app.png",
        title: "App Letracaixa",
        subtitle: "Aplicativo feito em Ionic e Angular para o cadastro de filmes, inspirado no Letterboxd.",
        githubLink: "https://github.com/marimatulle/movies-app-ionic",
        websiteLink: "https://movies-app-db.web.app",
    },
    {
        image: "./sneakers-shop.png",
        title: "Sneakers Shop",
        subtitle: "Site feito em Angular utilizando Angular Material para venda de tênis.",
        githubLink: "https://github.com/marimatulle/sneakers-shop",
        websiteLink: "https://sneakers-shop-lovat.vercel.app/",
    },
  ];

  return (
    <main id="projects" className="flex">
      <section className="flex card-section">
        {cardData.map((item, index) => (
          <article key={index} className="card">
            <img width={300} src={item.image} alt="" />
            <div style={{ width: "300px" }} className="box">
              <h1 className="title">{item.title}</h1>
              <p className="subtitle">{item.subtitle}</p>
              <div className="flex icons">
                <div style={{ gap: "11px" }} className="flex">
                  {item.githubLink && (
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                      <div className="icon-github"></div>
                    </a>
                  )}
                  {item.websiteLink && (
                    <a href={item.websiteLink} target="_blank" rel="noopener noreferrer">
                      <div className="icon-link"></div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
