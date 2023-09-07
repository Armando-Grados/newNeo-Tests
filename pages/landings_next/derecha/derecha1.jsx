import Head from 'next/head'
import Header from '../../../components/HeaderSimple/Header'
import Trajectory from '../../../components/Trajectory/Trajectory'
import SuccessCase from '../../../components/SuccessCase/SuccessCase'
import Trust from '../../../components/Companies/Trust/Trust'
import Footer from '../../../components/Footer/Footer'
import Der from '../../../components/IzqDer/Der'

import Hero from '../../../components/HeoLandingsSeparate/Heroder1'

import { dataHeroAws } from '../../../utilities/landings_next/der/hero'
import { trajectoriesHome } from '../../../utilities/quienes_somos/trajectories'
import { canalesCases } from '../../../utilities/services/canales/cases'

const derecha = () => {
  return (
    <>
    <Head>
        <title>Soluciones en diseño de experiencia I Neo Consulting</title>
        <meta
          name="description"
          content="Soluciones en diseño de experiencia I Neo Consulting"
        />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta property="og:url" content="https://neoconsulting.ai/servicios-aws" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Soluciones en diseño de experiencia I Neo Consulting"
        />
        <meta
          property="og:description"
          content="Soluciones en diseño de experiencia I Neo Consulting"
        />
        <script defer src="/js/gtm.js"></script>
        <script defer src="/js/hotjar.js"></script>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>

        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/06/der.png"
        />
    </Head>
    <Header />
    <Hero data={dataHeroAws} />
    <Trajectory trajectories={trajectoriesHome} />
    <Der />
    <SuccessCase cases={canalesCases} />
    <Trust />
    <Footer />
    </>
  )
}

export default derecha
