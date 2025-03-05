import React from "react";
import "./PopularPage.css";
import mountainImg from '../../assets/img/popular_mountain.jpg'
import lakeImg from '../../assets/img/popular_lake.jpg'
import forestImg from '../../assets/img/popular_forest.jpg'


const PopularPage = () => {
  return (
    <section className="popular section" id="popular">
      <h2 className="section__title">
        Enjoy The Beauty <br />
        Of The World
      </h2>

      <div className="popular__container container grid">
        <article className="popular__card">
          <div className="popular__image">
            <img
              src={mountainImg}
              alt="popular mountain"
              className="popular__img"
            />
            <div className="popular__shadow"></div>
          </div>

          <h2 className="popular__title">Ama Dablam</h2>

          <div className="popular__location">
            <i className="ri-map-pin-line"></i>
            <span>Nepal</span>
          </div>
        </article>

        <article className="popular__card">
          <div className="popular__image">
            <img
              src={lakeImg}
              alt="popular lake"
              className="popular__img"
            />
            <div className="popular__shadow"></div>
          </div>

          <h2 className="popular__title">Lake Wakatipu</h2>

          <div className="popular__location">
            <i className="ri-map-pin-line"></i>
            <span>New Zealand</span>
          </div>
        </article>

        <article className="popular__card">
          <div className="popular__image">
            <img
              src={forestImg}
              alt="popular forest"
              className="popular__img"
            />
            <div className="popular__shadow"></div>
          </div>

          <h2 className="popular__title">Redwood National Park</h2>

          <div className="popular__location">
            <i className="ri-map-pin-line"></i>
            <span>California</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PopularPage;
