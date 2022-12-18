import style from "./Accordion.module.scss";

import arrowDown from "../../../../public/assets/Questions/icon.svg";
import { useState } from "react";
import uuid from "react-uuid";

const Accordion = ({ data }) => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={style.accordion}>
      {data.map((content, i) => (
        <div className={style.accordion_container} key={uuid()}>
          <div
            className={style.accordion_container_title}
            onClick={() => toggle(i)}
          >
            <span>{content.title}</span>
            <img
              src={arrowDown.src}
              alt="arrow down"
              className={`
                ${
                  selected === i || selected === 0
                    ? style.accordion_container_title_icon_show
                    : ""
                } ${style.accordion_container_title_icon}
              `}
              style={{
                transform: selected === i ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </div>
          <ul
            className={`${style.accordion_container_menu} ${
              selected === i ? style.show : ""
            }`}
          >
            {content.ul.map((li) => (
              <li key={uuid()}>
                <a href={li.link}>{li.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
