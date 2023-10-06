import React from "react";
import techboy from "../../assets/svg/techboy.svg";
import '../../assets/scss/about.scss';

const About = () => {
  return (
    <>
      {/* <div className="h-screen about flex justify-center">
      </div> */}
      <div className="about flex mt-[30px] items-center justify-center w-full">
        <div className="sub-about w-[90vw] flex items-center justify-center">
          <div className="svg-container">
            <img src={techboy} alt="" className="" />
          </div>
          <div className="text-container">
            <h1 className="font-bold text-3xl text-heading-why">Why</h1>
            <h1 className="font-bold text-3xl text-heading-title">Svayambhu Tech ?</h1>
            <h2 className="font-bold text-2xl text-subheading">Because we deliver the best & we are unbeatable</h2>
            <p className="text-paragraph1">
              At <span className="font-semibold">Svayambhu Tech, </span>we embark on a relentless pursuit
              of excellence in the realm of digital innovation. With a corps of
              dedicated professionals and an unwavering commitment to surpassing
              boundaries, we deliver a comprehensive suite of services tailored
              precisely to your distinct requisites.
            </p>
            <p className="text-paragraph2">
              <span className="font-semibold">Svayambhu Tech</span> is well known to craft the most
              innovative & eye catchy websites & mobile app. We offer a wide
              range of customized services in mobile apps, website development,
              AR-VR Development, Game Development, Blockchain Development and
              much more. Our skilled team & our products are engineered to bring
              growth to your business. We believe in delivering the services
              without compromising on time and quality.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
