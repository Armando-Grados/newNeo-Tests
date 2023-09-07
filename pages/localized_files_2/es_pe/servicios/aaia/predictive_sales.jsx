import Hero from '../../../../../components/HeroEspecifics/HeroServices'
import Questions from '../../../../../components/Questions/Questions'
import Footer from '../../../../../components/Footer/Footer'
import Header from '../../../../../components/Header/Header'
import Team from '../../../../../components/Team/Team'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import Content from '../../../../../components/ContentServices/Content'
import Head from 'next/head'

import WhySolutions from '../../../../../components/WhySolution/WhySolutions'
import ServicesPerks from '../../../../../components/ServicesPerks/ServicesPerks'
import WorkProcess from '../../../../../components/WorkProcess/WorkProcess'

import { dataHeroPredictiveSales } from '../../../../../utilities/services/aaia/hero'
import { whySolPredictiveSales } from '../../../../../utilities/services/aaia/whySolutions'
import { perksPredictiveSales } from '../../../../../utilities/services/aaia/perks'
import { workPredictiveSales } from '../../../../../utilities/services/aaia/workProcess'

import { team } from '../../../../../utilities/services/aaia/team'
import { aaiaCases } from '../../../../../utilities/services/aaia/cases'
import { questionsaaia } from '../../../../../utilities/services/aaia/questions'
import { contentaaia } from '../../../../../utilities/services/aaia/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const predictiveSales = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Predictive Sales & Product Analytics | Expertos en IA | NEO</title>
      <meta
        name="description"
        content="Mejora el desempeño de tus productos o servicios. Analizamos el desempeño de productos o servicios con relación a su venta en mercados objetivos."
      />
      <meta
      property="og:title"
      content="Predictive Sales & Product Analytics | Expertos en IA | NEO"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Mejora el desempeño de tus productos o servicios. Analizamos el desempeño de productos o servicios con relación a su venta en mercados objetivos."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/aaia_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroPredictiveSales} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolPredictiveSales} />
    <ServicesPerks data={perksPredictiveSales} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workPredictiveSales} />
    <SuccessCase cases={aaiaCases} />
    <Team team={team} chapter={'en Analítica e inteligencia artificial'} startAt = {1} />
    <Questions questions={questionsaaia} />
    <Contact service={'aaia'} solution='predictive-sales-analytics' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentaaia} />
    <Footer/>
  </>
  )
}

export default predictiveSales