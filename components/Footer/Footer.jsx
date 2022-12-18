import style from "./Footer.module.scss";

import Accordion from "./_children/Accordion/Accordion";
import linkedin from "../../public/assets/Footer/linkedin.svg";
import fb from "../../public/assets/Footer/fb.svg";
import insta from "../../public/assets/Footer/insta.svg";
import afiliation from "../../public/assets/Footer/afiliation.png";
import yt from "../../public/assets/Footer/yt.svg";
import eccom2020 from "../../public/assets/Awards/eccom-award-2020.png";
import eccom2021 from "../../public/assets/Awards/eccom-award-2021.png";
import empresa from "../../public/assets/Awards/empresa.png";
import aws from "../../public/assets/Partners/aws.png";
import googleCloud from "../../public/assets/Partners/google-cloud.png";
import googleMarketingPlatform from "../../public/assets/Partners/google-marketing-platform.png";
import hubspot from "../../public/assets/Partners/hubspot.png";
import salesforce from "../../public/assets/Partners/salesforce.png";
import complaintsBook from "../../public/assets/Footer/complaints-book.png";
import logoNeo from "../../public/assets/Footer/logo-neo.png";

const Footer = () => {
  const AccordionData = [
    {
      title: "Servicios",
      ul: [
        {
          link: "#",
          text: "Analítica Digital e Inteligencia Artificial",
        },
        { link: "#", text: "Canales digitales y Growth Haking" },
        { link: "#", text: "Consultoría CRM" },
        { link: "#", text: "Diseño de experiencia" },
        { link: "#", text: "E-commerce" },
        { link: "#", text: "Headhunting y Mentoring" },
        { link: "#", text: "Marketing Automation" },
        { link: "#", text: "Publicidad Digital" },
      ],
    },
    {
      title: "Somos NEO",
      ul: [
        {
          link: "#",
          text: "Analítica Digital e Inteligencia Artificial",
        },
        { link: "#", text: "Sobre nosotros" },
        { link: "#", text: "Bolsa de trabajo" },
        { link: "#", text: "Guia Bcorp" },
      ],
    },
    {
      title: "Paises",
      ul: [
        {
          link: "#",
          text: "Perú",
        },
        { link: "#", text: "Colombia" },
        { link: "#", text: "Chile" },
        { link: "#", text: "Diseño de experiencia" },
        { link: "#", text: "México" },
      ],
    },
    {
      title: "Recursos",
      ul: [
        { link: "#", text: "Blog" },
        { link: "#", text: "Descargables" },
        { link: "#", text: "Cursos Gratuitos" },
        { link: "#", text: "Diseño de experiencia" },
        { link: "#", text: "Webinars" },
      ],
    },
  ];

  return (
    <div className={style.footer}>
      <div className={style.footer_top}>
        <Accordion data={AccordionData} />

        <div className={style.footer_top_social}>
          <h5>Redes sociales</h5>
          <div className={style.footer_top_social_icons}>
            <a href="#">
              <img src={yt.src} alt={"yt"} />
            </a>
            <a href="#">
              <img src={fb.src} alt={"fb"} />
            </a>
            <a href="#">
              <img src={linkedin.src} alt={"linkedin"} />
            </a>
            <a href="#">
              <img src={insta.src} alt={"insta"} />
            </a>
          </div>
        </div>

        <div className={style.footer_top_awards}>
          <h5>Premios y reconocimientos</h5>
          <div className={style.footer_top_awards_images}>
            <img src={eccom2020.src} alt="eccom2020" />
            <img src={eccom2021.src} alt="eccom2021" />
            <img src={empresa.src} alt="empresa" />
          </div>
        </div>

        <div className={style.footer_top_partners}>
          <h5>Somos Partners</h5>
          <div className={style.footer_top_partners_images}>
            <img src={googleCloud.src} alt="googleCloud" />
            <img
              src={googleMarketingPlatform.src}
              alt="googleMarketingPlatform"
            />
            <img src={salesforce.src} alt="salesforce" />
            <img src={aws.src} alt="aws" />
            <img src={hubspot.src} alt="hubspot" />
          </div>
        </div>

        <div className={style.footer_top_afiliations}>
          <h5>Afiliaciones</h5>
          <div className={style.footer_top_afiliations_images}>
            <img src={afiliation.src} alt="afiliation" />
          </div>
        </div>

        <div className={style.footer_top_border}></div>
      </div>

      <div className={style.footer_bottom}>
        <div className={style.footer_bottom_images}>
          <img src={logoNeo.src} alt="neo" />
          <p>
            © 2022 NEO Consulting - Todos los derechos reservados | Política de
            privacidad | Terminos de uso | Politica de Cookies
          </p>
          <img src={complaintsBook.src} alt="complaintsBook" />
        </div>
        <p>
          © 2022 NEO Consulting - Todos los derechos reservados | Política de
          privacidad | Terminos de uso | Politica de Cookies
        </p>
      </div>
    </div>
  );
};

export default Footer;
