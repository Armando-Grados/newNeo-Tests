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

import { dataHeroAuditoria } from '../../../../../utilities/services/da/hero'
import { whySolAuditoria } from '../../../../../utilities/services/da/whySolutions'
import { perksAuditoria } from '../../../../../utilities/services/da/perks'
import { workAuditoria } from '../../../../../utilities/services/da/workProcess'

import { team } from '../../../../../utilities/services/da/team'
import { daCases } from '../../../../../utilities/services/da/cases'
import { questionsda } from '../../../../../utilities/services/da/questions'
import { contentda } from '../../../../../utilities/services/da/content'
import { useUtm } from '../../../../../utilities/global/customhooks'

const auditoria = () => {
  const [urlHasUtm, router] = useUtm()
  return (
    <>
    <Head>
      <title>Auditoría de Publicidad Digital | Neo Consulting</title>
      <meta name="keywords" content="Servicio de publicidad digital, Auditoría de publicidad, Pauta publicitaria, Servicio de campañas digitales, Optimización de publicidad digital, Campañas de publicidad digital, Servicio Data Driven"/>
      <meta
        name="description"
        content="Maximiza el rendimiento de tus campañas publicitarias. Ofrecemos servicios de auditoría para optimizar tus estrategias digitales."
      />
      <meta
      property="og:title"
      content="Auditoría de Publicidad Digital | Neo Consulting"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Maximiza el rendimiento de tus campañas publicitarias. Ofrecemos servicios de auditoría para optimizar tus estrategias digitales."
      />
      <meta
        property="og:image"
        content="https://wordpress.neoconsulting.ai/wp-content/uploads/2023/05/digital_ads_home.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    </Head>
    <Header urlHasUtm={urlHasUtm} router={router}/>
    <Hero data={dataHeroAuditoria} urlHasUtm={urlHasUtm} router={router} />
    <WhySolutions data={whySolAuditoria} />
    <ServicesPerks data={perksAuditoria} urlHasUtm={urlHasUtm} router={router} />
    <WorkProcess processes={workAuditoria} />
    <SuccessCase cases={daCases} />
    <Team team={team} chapter={'en e-commerce'} />
    <Questions questions={questionsda} />
    <Contact service={'digital-ads'} solution='auditoria' urlHasUtm={urlHasUtm} router={router} />
    <Content contents={contentda} />
    <Footer/>
  </>
  )
}

export default auditoria