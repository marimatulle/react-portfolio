import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
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
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex">
        <span className="icon-moon-o"></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-remove"
                onClick={() => {
                  setShowModal(false);
                }}
              ></button>
            </li>
            <li>
              <a href=""></a>Sobre mim
            </li>
            <li>
              <a href=""></a>Projetos
            </li>
            <li>
              <a href=""></a>Contato
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
