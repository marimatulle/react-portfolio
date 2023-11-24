import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">Sobre mim</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li></li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // envia o valor pro local storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // pega o valor do local storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? ( <span className="icon-moon-o"></span> ) : ( <span className="icon-sun"></span> )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-cross"
                onClick={() => {
                  setShowModal(false);
                }}
              ></button>
            </li>
            <li>
              <a href="#about">Sobre mim</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
