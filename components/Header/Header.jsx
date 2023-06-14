import style from './Header.module.scss'
import { useState } from 'react'
import logoBlack from '../../public/assets/Logos/logo-black.png'
import logoSvg from '../../public/assets/Logos/logo-svg.svg'
import arrowDown from '../../public/assets/SVGs/Arrow-Down.svg'
import menu from '../../public/assets/SVGs/Menu.svg'
import close from '../../public/assets/SVGs/Close.svg'
import Accordion from './_children/Accordion/Accordion'
import uuid from 'react-uuid'
import Link from 'next/link'
import { AccordionData } from '../../utilities/global/header'
import PropTypes from 'prop-types'
// import TagManager from 'react-gtm-module'

const Header = ({ urlHasUtm, router }) => {
  // function handleButtonClick () {
  //   window.dataLayer = window.dataLayer || []
  //   window.dataLayer.push({
  //     event: 'interes_contacto',
  //     // buttonName: 'myButton'
  //     event_name: 'interes_contacto'
  //   })

  //   console.log('evnet firesd')
  // }

  const handleGTagEvent = (link) => {
    window.gtag('event', 'interes_contacto', {
      event_name: 'interes_contacto'
    })
  }

  const handleGTagEvent2 = (e, link, eventName) => {
    e.preventDefault()
    window.gtag('event', eventName, {
      event_label: link,
      transport_type: 'beacon',
      event_callback: function () { document.location = link }
    })
  }

  const utmParams = {}
  if (urlHasUtm) {
    for (const key in router.query) {
      utmParams[key] = router.query[key]
    }
  }
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className={style.header}>
      <div className={style.header_base}>
        <div className={style.header_base_left}>
          <button onClick={() => setShowMobileMenu(true)}>
            <img
              src={menu.src}
              alt='menu'
              className={style.header_base_left_menu}
            />
          </button>
          <a href='/'>
            <img
              src={logoSvg.src}
              alt='neo'
              className={style.header_base_left_logo}
            />
          </a>
        </div>

        <ul className={style.header_base_menu}>
          {AccordionData.map((menu) => (
            <li key={uuid()} className={style.header_base_menu_item}>
              {menu.ul
                ? <p>{menu.title}</p>
                : <a href={menu.link}>{menu.title}</a>
                }

              {menu.ul ? <img src={arrowDown.src} alt='arrow down' /> : ''}

              <ul
                className={style.header_base_menu_item_dropdown}
                style={menu.ul ? {} : { display: 'none' }}
              >
                {menu.ul?.map((item) => (
                  <li
                    className={style.header_base_menu_item_dropdown_item}
                    key={uuid()}
                  >
                    <img src={item.icon} alt={item.text} />
                    <a
                      href={item.link}
                      onClick={(e) => handleGTagEvent2(e, item.link, item.eventName)}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <button
          // onClick={() => {
          //   TagManager.dataLayer({
          //     dataLayer: {
          //       event: 'click_button_formulario',
          //       event_category: 'boton_interes_contacto',
          //       event_label: 'navBar_boton_contacto',
          //       value: 1
          //     }
          //   })
          // }}
          onClick={handleGTagEvent}
          className={style.header_base_right}
        >
          <Link
            href={{
              pathname: '/contact',
              query: {
                service: 'default',
                solution: 'default',
                ...(urlHasUtm && {
                  ...utmParams
                })
              }
            }}
          >
            Contáctanos
          </Link>
        </button>
      </div>

      <div
        className={style.header_mobile_active}
        style={
          showMobileMenu
            ? { transform: 'translateX(0)' }
            : { transform: 'translateX(-100%)' }
        }
      >
        <div className={style.header_mobile_active_head}>
          <img
            className={style.header_mobile_active_head_logo}
            src={logoBlack.src}
            alt='neo'
          />

          <button
            className={style.header_mobile_active_head_close}
            onClick={() => {
              setShowMobileMenu(false)
            }}
          >
            <img src={close.src} alt='close' />
          </button>
        </div>

        <div className={style.header_mobile_active_body}>
          <Accordion data={AccordionData} />
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  urlHasUtm: PropTypes.bool,
  router: PropTypes.object
}
export default Header
