import React from "react";
import "./ExplorePage.css";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

import beachImg from '../../assets/img/explore_beach.jpg'
import profileImg from '../../assets/img/explore_profile.jpg'

const ExplorePage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 3000,
      delay: 400,
      // reset: true
    });

    sr.reveal(`.explore__data, .explore__user`);
    // Limpieza (opcional) al desmontar el componente
    return () => {
      sr.destroy();
    };
  }, []); // Se ejecuta solo al montar el componente

  return (
    <section className="explore section" id="explore">
      <div className="explore__container">
        <div className="explore__image">
          <img
            src={beachImg}
            alt="explore image"
            className="explore__img"
          />
          <div className="explore__shadow"></div>
        </div>

        <div className="explore__content container grid">
          <div className="explore__data">
            <h2 className="section__title">
              Explore The <br />
              Best Paradises
            </h2>
            <p className="explore__description">
              Exploring paradises such as islands and valleys when traveling the
              world is one of the greatest experiences when you travel, it
              offers you harmony and peace and you can enjoy it with great
              comfort.
            </p>
          </div>

          <div className="explore__user">
            <img
              src={profileImg}
              alt="explore profile"
              className="explore__profile"
            />
            <span className="explore__name">Andre Furtado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
