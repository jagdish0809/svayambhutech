import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';


const Home = () => {
  return (
    <>
        <div className='home'>
        <Navbar />
        <Hero/>
        </div>
    </>
  )
}

export default Home