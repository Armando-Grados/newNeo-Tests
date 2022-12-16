import style from "./Header.module.scss";
import logoWhite from "../../public/assets/Logos/logo-white.png";
import logoBlack from "../../public/assets/Logos/logo-black.png";
import arrowDown from "../../public/assets/SVGs/Arrow-Down.svg";
import polygon from "../../public/assets/SVGs/Polygon.svg";
import menu from "../../public/assets/SVGs/Menu.svg";
import close from "../../public/assets/SVGs/Close.svg";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.header_img}>
        <img src={menu.src} alt="menu" className={style.header_img_menu} />

        <div className={style.header_img_logo}>
          <img
            src={logoWhite.src}
            alt="Logo"
            className={style.header_img_logo_white}
          />
          <img
            src={logoBlack.src}
            alt="Logo"
            className={style.header_img_logo_black}
          />
        </div>
        <img src={close.src} alt="close" className={style.header_img_close} />
      </div>

      <ul className={style.header_tabs}>
        <li
          className={style.header_tabs_tab}
          onClick={() => {
            setShowDropdown1(!showDropdown1);
            setShowDropdown2(false);
            setShowDropdown3(false);
          }}
          id="dropdown1"
        >
          <span>Servicios</span>
          <img
            src={arrowDown.src}
            alt="arrow down"
            className={style.header_tabs_tab_down_arrow}
          />
          <div
            className={
              showDropdown1
                ? style.header_tabs_tab_dropdown_active
                : style.header_tabs_tab_dropdown
            }
          >
            <div className={style.header_tabs_tab_dropdown_polygon}>
              <img src={polygon.src} alt="polygon" />
            </div>
            <ul className={style.header_tabs_tab_dropdown_menu}>
              <li>
                <Link href="#">Canales digitales y Growth Haking</Link>
              </li>
              <li>
                <Link href="#">E-commerce</Link>
              </li>
              <li>
                <Link href="#">Headhunting y Mentoring</Link>
              </li>
              <li>
                <Link href="#">Consultoría CRM</Link>
              </li>
              <li>
                <Link href="#">
                  Analítica Digital e Inteligencia Artificial
                </Link>
              </li>
              <li>
                <Link href="#">Diseño de experiencia</Link>
              </li>
              <li>
                <Link href="#">Publicidad digital</Link>
              </li>
              <li>
                <Link href="#">Marketing Automation</Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={style.header_tabs_tab}
          onClick={() => {
            setShowDropdown1(false);
            setShowDropdown2(!showDropdown2);
            setShowDropdown3(false);
          }}
          id="dropdown2"
        >
          <span>Productos</span>
          <img
            src={arrowDown.src}
            alt="arrow down"
            className={style.header_tabs_tab_down_arrow}
          />
          <div
            className={
              showDropdown2
                ? style.header_tabs_tab_dropdown_active
                : style.header_tabs_tab_dropdown
            }
          >
            <div className={style.header_tabs_tab_dropdown_polygon}>
              <img src={polygon.src} alt="polygon" />
            </div>
            <ul className={style.header_tabs_tab_dropdown_menu}>
              <li>
                <Link href="#">Neo Digital Skills</Link>
              </li>
              <li>
                <Link href="#">Otros</Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={style.header_tabs_tab}
          onClick={() => {
            setShowDropdown1(false);
            setShowDropdown2(false);
            setShowDropdown3(!showDropdown3);
          }}
          id="dropdown3"
        >
          <span>Recursos</span>
          <img
            src={arrowDown.src}
            alt="arrow down"
            className={style.header_tabs_tab_down_arrow}
          />
          <div
            className={
              showDropdown3
                ? style.header_tabs_tab_dropdown_active
                : style.header_tabs_tab_dropdown
            }
          >
            <div className={style.header_tabs_tab_dropdown_polygon}>
              <img src={polygon.src} alt="polygon" />
            </div>
            <ul className={style.header_tabs_tab_dropdown_menu}>
              <li>
                <Link href="#">Descargables</Link>
              </li>
              <li>
                <Link href="#">Webinnars</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={style.header_tabs_tab}>Casos de éxito</li>
        <li className={style.header_tabs_tab}>Blog</li>
      </ul>

      <div>
        <Link className={style.header_btn} href={"/contact"}>
          Contáctanos
        </Link>
      </div>
    </header>
  );
};

export default Header;
