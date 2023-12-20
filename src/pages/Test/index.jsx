import React, { memo, useEffect, useState } from "react";
import { bilet } from "../../Databese";
import { defaultImg } from "../../images/";
import "./test.scss";
import { useSelector } from "react-redux";

const index = memo(() => {
  const selector = useSelector((state) => state.tests);
  console.log(Number(selector.test));
  const count = Number(selector.test) - 1;
  const [surildi, setSurildi] = useState(0);
  const [shablon, setShablon] = useState([]);

  const hendleClick = (index, i) => {
    setShablon([
      ...shablon,
      {
        disabled: true,
        savol: i,
        variant: index,
        status: bilet[count][i].right == index,
      },
    ]);
  };
  const hendlenext = (id) => {
    setSurildi(id);
  };
  return (
    <>
      <header className="header__test">
        <ul>
          {bilet[count]?.map((item, index) => (
            <li
              style={
                shablon?.find((e) => e.savol == item.id)?.disabled
                  ? shablon?.find((e) => e.savol == item.id)?.status
                    ? { backgroundColor: "green" }
                    : { backgroundColor: "red" }
                  : null
              }
              id={item.id == surildi ? "true" : "false"}
              className={item.id == surildi ? "true" : "false"}
              onClick={() => hendlenext(index)}
              key={item.id}
            >
              {item.id + 1}
            </li>
          ))}
        </ul>
        <div>0:23:00</div>
      </header>
      <div
      id="test__container"
        className="test__container"
        style={{ transform: `translateX(${-surildi * 100}vw)` }}
      >
        {bilet[count]?.map((item, i) => (
          <div id="test" key={item.id} className="test__pege">
            <h1 className="test__title">{item.question}</h1>
            <div className="test__box" id="test__box">
              <img
                className="test__img"
                src={item.img ? item.img : defaultImg}
                alt=""
              />
              <ul className="test__savollari">
                {item.answer?.map((answer, index) => (
                  <button
                    style={
                      shablon?.find((e) => e.savol === i)?.disabled
                        ? shablon?.find(
                            (e) => e.savol === i && e.variant === index
                          )?.variant === index
                          ? shablon?.find((e) => e.savol === i && e.status)
                              ?.status
                            ? { backgroundColor: "green" }
                            : { backgroundColor: "red" }
                          : null
                        : null
                    }
                    disabled={shablon.find((e) => e.savol == i)?.disabled}
                    id={i.toString()}
                    key={index}
                    onClick={() => hendleClick(index, i)}
                  >
                    <p>F{index + 1}</p>
                    <p>{answer}</p>
                  </button>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
});

export default index;
