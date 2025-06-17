import React from 'react'
import Banner from './Banner/Banner'
import AboutPage from './About/AboutPage'
import PartnersSection from './meet/PartnerSection'
import CountSection from './CountSection/CountSection'
import ServiceCard from './Home/ServiceCard'

export default function Home() {
  return (
   <>
  <div>
     <Banner></Banner>
     <AboutPage></AboutPage>
     <PartnersSection></PartnersSection>
     <CountSection></CountSection>
     <ServiceCard></ServiceCard>
  </div>
   </>
  )
}
