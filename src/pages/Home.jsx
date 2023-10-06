import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Projects from '../components/projects/Projects';
import CustomCursor from '../components/UI/CustomCursor';

const Home = () => {
  return (
    <>
        <div className='home'>
          <CustomCursor/>
        <Navbar />
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        </div>
    </>
  )
}

export default Home

