import style from "./Accordion.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import icon from "../../public/assets/Questions/icon.svg";
import uuid from "react-uuid";

const Accordion = ({ questions, questTitle, questDesc }) => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className={style.accordion}>
      <div className={style.accordion_container}>
        <h2 className={style.accordion_container_title}>
          {questTitle || "Preguntas frecuentes"}
        </h2>
        <p className={style.accordion_container_desc}>
          {questDesc ||
            `Aclara todas tus dudas acerca de nuestras soluciones y cartera de
          servicios.`}
        </p>
        {questions.map(({ question, answer }, i) => {
          return (
            <div key={uuid()}>
              <div
                className={style.accordion_container_header}
                onClick={() => toggle(i)}
              >
                <p className={style.accordion_container_header_title}>
                  {question}
                </p>
                <span className={style.accordion_container_title_icon}>
                  <img
                    className={
                      selected === i || selected === 0
                        ? style.accordion_container_title_icon_show
                        : ""
                    }
                    style={{
                      transform:
                        selected === i ? "rotate(180deg)" : "rotate(0)",
                    }}
                    src={icon.src}
                    width={24}
                    height={24}
                  />
                </span>
              </div>
              <div
                className={`${style.accordion_container_content} ${
                  selected === i ? style.show : ""
                }`}
              >
                <p className={style.accordion_container_content_desc}>
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
Accordion.propTypes = {
  questions: PropTypes.array,
};

export default Accordion;
