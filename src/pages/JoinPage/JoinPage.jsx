import React from "react";
import "./JoinPage.css";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

import islandImg from "../../assets/img/join_island.jpg";

const JoinPage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 3000,
      delay: 400,
      // reset: true
    });

    sr.reveal(`.join__image`, { origin: "right" });
    sr.reveal(`.join__data`, { origin: "left" });

    // Limpieza (opcional) al desmontar el componente
    return () => {
      sr.destroy();
    };
  }, []); // Se ejecuta solo al montar el componente

  return (
    <section className="join section">
      <div className="join__container container grid">
        <div className="join__data">
          <h2 className="section__title">
            Your Journey <br />
            Starts Here
          </h2>
          <p className="join__description">
            Get up to date with the latest travel and information from us.
          </p>

          <form action="" className="join__form">
            <input
              type="email"
              placeholder="Enter your email..."
              className="join__input"
            />

            <button className="join__button button">
              Subscribe Our Newsletter <i className="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>

        <div className="join__image">
          <img src={islandImg} alt="join image" className="join__img" />
          <div className="join__shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default JoinPage;
