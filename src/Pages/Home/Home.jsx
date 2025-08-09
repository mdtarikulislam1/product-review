import React from 'react'
import HeroSection from './Banner/Banner'
import AboutPage from './About/AboutPage'
import PartnersSection from './meet/PartnerSection'
import CountSection from './CountSection/CountSection'
import ServiceCard from './ServiceCard'


export default function Home() {
  return (
   <>
  <div>
     <HeroSection></HeroSection>
     <AboutPage></AboutPage>
     <PartnersSection></PartnersSection>
     <CountSection></CountSection>
     <ServiceCard></ServiceCard>
  </div>
   </>
  )
}
