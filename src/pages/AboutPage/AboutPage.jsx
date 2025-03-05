import React from "react";
import "./AboutPage.css";
import aboutImg from "../../assets/img/about1.jpg";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 3000,
      delay: 400,
      // reset: true
    });

    sr.reveal(`.about__data`, { origin: "right" });
    sr.reveal(`.about__image`, { origin: "left" });

    // Limpieza (opcional) al desmontar el componente
    return () => {
      sr.destroy();
    };
  }, []); // Se ejecuta solo al montar el componente

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">
            Learn More <br />
            About Beyond Borders
          </h2>

          <p className="about__description">
            All the trips the world are a great pleasere and happiness for
            anyone, enjoy the sights whne you travel the world. Travel safety
            and without worries, get your trip and explore the paradises of the
            world.
          </p>

          <a href="" className="button">
            Explore Beyond Borders <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="about__image">
          <img src={aboutImg} alt="about image" className="about__img" />
          <div className="about__shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
