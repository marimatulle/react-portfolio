import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  const [showScroll, setShowScroll] = useState(false);
  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Footer />

      <a style={{opacity: showScroll? 1 : 0, transition: "3s"}} href="#up">
        <button className="icon-arrow-up scroll2Top"></button>
      </a>
    </div>
  );
};

export default App;
