import "./home.scss";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { quizCount } from "../../store/testCount";
import { bilet } from "../../Databese";

const index = memo(() => {
  const navigate = useNavigate();
  const [biletlar, setBiletlar] = useState(false);
  const dispatch = useDispatch();
  const hendleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    dispatch(quizCount(e.target[0].value));
    navigate("/biletlar");
  };
  localStorage.removeItem("count");
  const hendleClick = () => {
    navigate("/exam");
    localStorage.setItem(
      "count",
      JSON.stringify(Math.floor(Math.random() * bilet.length))
    );
  };
  return (
    <div className="home">
      {!biletlar && (
        <section className="test__info">
          <h4>
            Mazkur testlar O'zbekiston Respublikasi YHXB tomonidan tasdiqlangan
            rasmiy biletlar asosida tuzilgan
          </h4>
          <button className="mavzular" type="button">
            Mavzular bo'yicha trenirovkani boshlash{" "}
          </button>
          <div className="btn__box">
            <button onClick={() => setBiletlar(true)} type="button">
              Biletlar bo'yicha trenirovkani boshlash
            </button>
            <button onClick={hendleClick}>Imtihon topshirish </button>
          </div>
        </section>
      )}
      {biletlar && (
        <section className="home__peges">
          <form className="home__form" onSubmit={hendleSubmit}>
            <select name="" id="" className="home__select">
              <option value="1">1-Bilet</option>
              <option value="2">2-Bilet</option>
              <option value="3">3-Bilet</option>
              <option value="4">4-Bilet</option>
              <option value="5">5-Bilet</option>
              <option value="6">6-Bilet</option>
              <option value="7">7-Bilet</option>
              <option value="8">8-Bilet</option>
              <option value="9">9-Bilet</option>
              <option value="10">10-Bilet</option>
            </select>
            <button className="form__submit">Boshlash</button>
          </form>
        </section>
      )}
    </div>
  );
});

export default index;
