import React from 'react'
import Hero from "../components/Hero/Hero"
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import Team from "../components/OurTeam/TeamSection"
//import Events from '../components/Events/Events'
import Location from '../components/Location/Location'

const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      <Banner />
      <Team />
      <Location />
    </main>
  )
}

export default Home