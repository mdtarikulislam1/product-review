import React from 'react'
import Banner from './Banner/Banner'
import AboutPage from './About/AboutPage'
import PartnersSection from './meet/PartnerSection'

export default function Home() {
  return (
   <>
  <div>
     <Banner></Banner>
     <AboutPage></AboutPage>
     <PartnersSection></PartnersSection>
  </div>
   </>
  )
}
