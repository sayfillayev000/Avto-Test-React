import "./home.scss";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { quizCount } from "../../store/testCount";
import { bilet } from "../../Databese";

const index = memo(() => {
  const navigate = useNavigate();
  const [biletlar, setBiletlar] = useState(false);
  const dispatch = useDispatch();
  const hendleSubmit = (e) => {
    e.preventDefault();
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
          <h2>
            Mazkur testlar O'zbekiston Respublikasi YHXB tomonidan tasdiqlangan
            rasmiy biletlar asosida tuzilgan
          </h2>
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
              {bilet.map(item =>(
                <option value={item[0]?.quiz_id} >{item[0]?.quiz_id} - Bilet</option>
              ))}
            </select>
            <button className="form__submit">Boshlash</button>
          </form>
        </section>
      )}
    </div>
  );
});

export default index;
