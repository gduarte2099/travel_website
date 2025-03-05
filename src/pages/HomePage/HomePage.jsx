import React from "react";
import { useEffect } from "react";
import "./HomePage.css";
import homeImage from "../../assets/img/home1.jpg";
import croatiaImg from "../../assets/img/img_croatia.jpg";
import icelandImg from "../../assets/img/img_iceland.jpg";
import italyImg from "../../assets/img/img_italy.jpg";
import mexicoImg from "../../assets/img/img_mexico.jpg";
import ScrollReveal from "scrollreveal";

const HomePage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 3000,
      delay: 400,
      // reset: true
    });

    sr.reveal(`.home__data`);
    sr.reveal(`.home__card`, { delay: 600, distance: "100px", interval: 100 });

    // Limpieza (opcional) al desmontar el componente
    return () => {
      sr.destroy();
    };
  }, []); // Se ejecuta solo al montar el componente

  return (
    <section className="home section" id="home">
      {/**imagen de fondo de la seccion home */}
      <img src={homeImage} alt="home image" className="home__bg" />
      <div className="home__shadow"></div>

      <div className="home__container container grid">
        {/**info de bienvenida */}
        <div className="home__data">
          <div className="home__subtitile">Welcome to Beyond Borders</div>

          <h1 className="home__title">
            Explore <br />
            The World
          </h1>
          <p className="home__description">
            Live the trips explogin the world, discover paradises, islands,
            mountains and much more, get your trip now.
          </p>
          <a href="" className="button">
            Start Your Journey <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        {/**carta de imagenes (articulos) presentadas en la seccion home */}
        <div className="home__cards grid">
          <article className="home__card">
            <img src={croatiaImg} alt="" className="home__card-img" />
            <h3 className="home__card-title">Croatia</h3>
            <div className="home__card-shadow"></div>
          </article>

          <article className="home__card">
            <img src={icelandImg} alt="" className="home__card-img" />
            <h3 className="home__card-title">Iceland</h3>
            <div className="home__card-shadow"></div>
          </article>

          <article className="home__card">
            <img src={italyImg} alt="" className="home__card-img" />
            <h3 className="home__card-title">Italy</h3>
            <div className="home__card-shadow"></div>
          </article>

          <article className="home__card">
            <img src={mexicoImg} alt="" className="home__card-img" />
            <h3 className="home__card-title">Mexico</h3>
            <div className="home__card-shadow"></div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
