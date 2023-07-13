import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import SuccessCase from '../components/SuccessCase/SuccessCase'
import ExploreSuccessCases from '../components/ExploreSuccessCases/ESC'
import { successStories } from '../utilities/home/cases'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Head>
        <title>Casos de Éxito | Neo Consulting</title>
        <meta
          name="description"
          content="En nuestros casos de éxito podrás ver de qué manera nuestros clientes utilizan nuestras soluciones."
        />
        <meta
          property="og:image"
          content="https://wordpress.neoconsulting.ai/wp-content/uploads/2022/05/Frame-44-1-scaled.jpg"
        />

        <meta
          property="og:url"
          content="https://neoconsulting.ai/casos-de-exito/"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Casos de Éxito | Neo Consulting" />
        <meta
          property="og:description"
          content="En nuestros casos de éxito podrás ver de qué manera nuestros clientes utilizan nuestras soluciones."
        />

        <link rel="icon" href="/casos-de-exito-neo-consulting/favicon.ico" />
      </Head>

      <Header />
      <SuccessCase cases={successStories} />
      <ExploreSuccessCases />
      <Contact />
      <Footer />
    </>
  )
}

export default Index
