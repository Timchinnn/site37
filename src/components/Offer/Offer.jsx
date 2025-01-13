import React from "react";
import styles from "./Offer.module.css";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // -1 означает переход на одну страницу назад
  };
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.header}>
        {" "}
        <div className={styles.logos}>
          <img className={styles.logo} src="/BANSYS.png" alt="" />
          <img
            className={styles.arrow}
            src="/arrow.png"
            alt=""
            onClick={handleBackClick}
            style={{ cursor: "pointer" }} // Добавьте стиль курсора для указания, что элемент кликабелен
          />
        </div>
      </div>
      <div className={styles.main}>
        <p className={styles.offer}>Сделать предложение </p>
        <div className={styles.chooseAll}>
          <p className={styles.offer}>Выбрать</p>
          <div className={styles.checkboxAll}>
            <p> все</p>
            <input type="checkbox" id="coding" name="interest" value="coding" />
          </div>
        </div>
        <div>
          <p>Наименование</p>
          <div>
            <p>состояние</p>
            <p>кол-во</p>
          </div>
        </div>
        <div>
          <div>
            <p>Станины для Mei Advance  с чипом….. </p>
            <div>
              <p>б/у</p>
              <p>15</p>
            </div>
          </div>
          <div>
            <div>
              <p>p/n:</p>
              <p>1234567890111</p>
              <img src="" alt="" />
            </div>
            <input type="checkbox" id="coding" name="interest" value="coding" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
