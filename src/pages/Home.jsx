import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import CustomCursor from "../components/UI/CustomCursor";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/footer";

// const Home = () => {
//   return (
//     <>
//       <div className="home">
        // <CustomCursor />
//         <Navbar />
//         <Hero />
//         <About />
//         <Services />
//         <Projects />
//         <Contact/>
//         <Footer/>
//       </div>
//     </>
//   );
// };

const scrollhandler = (id) => {
  const element = document.getElementById(id);
  console.log(id, "id")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const Home = () => {
  return (
    <>
      <div className="home">
        <CustomCursor />
        <Navbar selected={scrollhandler}/>
        <Hero id="hero"  />
        <About id="about" />
        <Services id="services" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer selected={scrollhandler}/>
      </div>
    </>
  );
};


export default Home;
