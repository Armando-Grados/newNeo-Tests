/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // basePath: '/casos-de-exito-neo-consulting-beta',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  async rewrites () {
    return [
      {
        source: '/pe/servicios/consultoria-customer-relationship-management/',
        destination: '/localized_files_2/es_pe/servicios/crm/crm'
      },
      {
        source: '/pe/servicios/canales-digitales-y-growth-hacking/',
        destination: '/localized_files_2/es_pe/servicios/canales/canales'
      },
      {
        source: '/pe/servicios/consultoria-ecommerce/',
        destination: '/localized_files_2/es_pe/servicios/ecommerce/ecommerce'
      },
      {
        source: '/pe/servicios/headhunting-y-mentoring/',
        destination: '/localized_files_2/es_pe/servicios/dts/dts'
      },
      {
        source: '/pe/servicios/analitica-digital-inteligencia-artificial/',
        destination: '/localized_files_2/es_pe/servicios/aaia/aaia'
      },
      {
        source: '/pe/servicios/experience-design/',
        destination: '/localized_files_2/es_pe/servicios/experience_design/xd'
      },
      {
        source: '/pe/servicios/digital-advertising/',
        destination: '/localized_files_2/es_pe/servicios/digital_ads/da/'
      },
      {
        source: '/pe/servicios/marketing-automation/',
        destination: '/localized_files_2/es_pe/servicios/mkt/mkt'
      }
      // {
      //   source: '/casos-de-exito-neo-consulting/**',
      //   destination: '/localized_files_2/es_pe/servicios/mkt/mkt'
      // }
    ]
  }
}
module.exports = nextConfig
