import style from "./Header.module.scss";
import { useState } from "react";

import logoWhite from "../../public/assets/Logos/logo-white.png";
import logoBlack from "../../public/assets/Logos/logo-black.png";
import arrowDown from "../../public/assets/SVGs/Arrow-Down.svg";
import menu from "../../public/assets/SVGs/Menu.svg";
import close from "../../public/assets/SVGs/Close.svg";
import Accordion from "./_children/Accordion/Accordion";
import basket from "../../public/assets/Header/basket.svg";
import brain from "../../public/assets/Header/brain.svg";
import consult from "../../public/assets/Header/consult.svg";
import download from "../../public/assets/Header/download.svg";
import laptop from "../../public/assets/Header/laptop.svg";
import nodeUser from "../../public/assets/Header/node-user.svg";
import rise from "../../public/assets/Header/Rise.svg";
import stats from "../../public/assets/Header/stats.svg";
import sync from "../../public/assets/Header/Sync.svg";
import techInfo from "../../public/assets/Header/tech-info.svg";
import window from "../../public/assets/Header/window.svg";
import videoChat from "../../public/assets/Header/video-chat-line.svg";
import uuid from "react-uuid";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const AccordionData = [
    {
      title: "Servicios",
      ul: [
        {
          link: "#",
          text: "Canales digitales y Growth Haking",
          icon: laptop.src,
        },
        { link: "#", text: "E-commerce", icon: basket.src },
        { link: "#", text: "Headhunting y Mentoring", icon: nodeUser.src },
        { link: "#", text: "Consultoría CRM", icon: consult.src },
        {
          link: "#",
          text: "Analítica Digital e Inteligencia Artificial",
          icon: rise.src,
        },
        { link: "#", text: "Diseño de experiencia", icon: sync.src },
        { link: "#", text: "Publicidad Digital", icon: stats.src },
        { link: "#", text: "Marketing Automation", icon: techInfo.src },
      ],
    },
    {
      title: "Productos",
      ul: [
        {
          link: "#",
          text: "Neo Digital Skills",
          icon: brain.src,
        },
        { link: "#", text: "Otros", icon: window.src },
      ],
    },
    {
      title: "Recorsos",
      ul: [
        {
          link: "#",
          text: "Descargables",
          icon: download.src,
        },
        { link: "#", text: "Webinnars", icon: videoChat.src },
      ],
    },
    { title: "Casos de éxito" },
    { title: "Blog" },
  ];

  return (
    <header className={style.header}>
      <div className={style.header_base}>
        <div className={style.header_base_left}>
          <button onClick={() => setShowMobileMenu(true)}>
            <img
              src={menu.src}
              alt="menu"
              className={style.header_base_left_menu}
            />
          </button>
          <a href="#">
            <img
              src={logoWhite.src}
              alt="neo"
              className={style.header_base_left_logo}
            />
          </a>
        </div>

        <ul className={style.header_base_menu}>
          {AccordionData.map((menu) => (
            <li key={uuid()} className={style.header_base_menu_item}>
              <a href="#">{menu.title}</a>

              {menu.ul ? <img src={arrowDown.src} alt="arrow down" /> : ""}

              <ul
                className={style.header_base_menu_item_dropdown}
                style={menu.ul ? {} : { display: "none" }}
              >
                {menu.ul?.map((item) => (
                  <li
                    className={style.header_base_menu_item_dropdown_item}
                    key={uuid()}
                  >
                    <img src={item.icon} alt={item.text} />
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <button
          className={style.header_base_right}
          onClick={() => setShowMobileMenu(true)}
        >
          <a href="#">Contáctanos</a>
        </button>
      </div>

      <div
        className={style.header_mobile_active}
        style={
          showMobileMenu
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-100%)" }
        }
      >
        <div className={style.header_mobile_active_head}>
          <img
            className={style.header_mobile_active_head_logo}
            src={logoBlack.src}
            alt="neo"
          />

          <button
            className={style.header_mobile_active_head_close}
            onClick={() => {
              setShowMobileMenu(false);
            }}
          >
            <img src={close.src} alt="close" />
          </button>
        </div>

        <div className={style.header_mobile_active_body}>
          <Accordion data={AccordionData} />
          {/* <ul className={style.header_mobile_active_body_menu}>
            <li className={style.header_mobile_active_body_menu_item}>
              <a href="#">Casos de éxito</a>
            </li>
            <li className={style.header_mobile_active_body_menu_item}>
              <a href="#">Blog</a>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
