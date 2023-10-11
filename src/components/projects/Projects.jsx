import React, { useState, useEffect } from "react";
import "../../assets/scss/projects.scss";
import Button from "../../components/UI/Button";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import veselka from "../../assets/images/veselka.png";
import arihant from "../../assets/images/arihantpigments.png";
import mbuy from "../../assets/images/mbuy.png";
import shiva from "../../assets/images/shivaperformance.png";
import TechButton from "../UI/TechButton";
import CustomCursor from "../UI/CustomCursor";

import "swiper/css";
import "swiper/css/navigation";

const Projects = (props) => {
  const [cursorOverProjects, setCursorOverProjects] = useState(false);

  const handleMouseEnter = () => {
    setCursorOverProjects(true);
  };

  const handleMouseLeave = () => {
    setCursorOverProjects(false);
  };

  useEffect(() => {
    const projectsContainer = document.querySelector(".projects");

    if (projectsContainer) {
      projectsContainer.addEventListener("mouseenter", handleMouseEnter);
      projectsContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (projectsContainer) {
        projectsContainer.removeEventListener("mouseenter", handleMouseEnter);
        projectsContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <CustomCursor cursorOverProjects={cursorOverProjects} />
      <div
        className="projects  flex justify-center px-7 mt-20 md:mt-0 pb-10" id={props.id}
      >
        <div className="projects__sub-container w-[100vw] relative max-w-[1600px]">
          <div className="w-full projects__title-container flex justify-between items-center mb-4 px-5">
            <h1 className="font-bold text-white text-[30px]">
              Let’s Have a Look at our <span>Projects</span>
            </h1>
            <Button value="See More" className="project_see_more_desktop" />
          </div>
          <div className="projects__slider-container">
            <Swiper
              spaceBetween={40}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              breakpoints={{
                855: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 150,
                },
                1450: {
                  slidesPerView: 2,
                  spaceBetween: 150,
                },
              }}
              className="w-[80%] "
              navigation={{
                nextEl: ".arrow_container_right1",
                prevEl: ".arrow_container_left1",
                clickable: true,
              }}
              modules={[Navigation, Autoplay]}
            >
              <SwiperSlide>
                <div className="projects__slider-card flex flex-col relative">
                  <img src={veselka} alt="" className="" />
                  <div className="projects__slider-card-text px-4 mt-2">
                    <h1 className="text-2xl text-white">Veselka Interiors</h1>
                    <div className="flex flex-wrap">
                      <TechButton
                        value="JavaScript"
                        className="bg-amber-500 text-white mt-1"
                      />
                      <TechButton
                        value="SCSS"
                        className="border text-white mt-1"
                      />
                      <TechButton
                        value="HTML"
                        className="border text-white mt-1"
                      />
                    </div>
                    <p className="">
                      The Veselka Interior Design website epitomizes our
                      dedication to seamlessly merging aesthetics and
                      user-friendly design, transforming spaces into digital
                      symphonies of timeless elegance.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects__slider-card flex flex-col justify-center items-end">
                  <img src={mbuy} alt="" className="" />
                  <div className="projects__slider-card-text px-4 mt-2">
                    <h1 className="text-2xl text-white">Material Buy</h1>
                    <div className="flex flex-wrap">
                      <TechButton
                        value="Reactjs"
                        className="bg-sky-600 text-white mt-1"
                      />
                      <TechButton
                        value="Nodejs"
                        className="text-white bg-green-900 mt-1"
                      />
                      <TechButton
                        value="MongoDB"
                        className="bg-green-300 text-black mt-1"
                      />
                      <TechButton
                        value="Tailwind"
                        className="border text-white mt-1"
                      />
                      <TechButton
                        value="HTML"
                        className="border text-white mt-1"
                      />
                    </div>
                    <p className="">
                      Material Buy excels as a premier construction product
                      supplier, while Svayambhu Tech specializes in crafting
                      intuitive e-commerce platforms to serve a vast user base,
                      numbering in the hundreds of thousands.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects__slider-card flex flex-col justify-center items-center">
                  <img src={shiva} alt="" className="" />
                  <div className="projects__slider-card-text px-4 mt-2">
                    <h1 className="text-2xl text-white">Shiva Performance</h1>
                    <div className="flex flex-wrap">
                      <TechButton
                        value="JavaScript"
                        className="bg-amber-500 text-white mt-1"
                      />
                      <TechButton
                        value="Nodejs"
                        className="text-white bg-green-900 mt-1"
                      />
                      <TechButton
                        value="MongoDB"
                        className="bg-green-300 text-black mt-1"
                      />
                      <TechButton
                        value="CSS"
                        className="border text-white mt-1"
                      />
                      <TechButton
                        value="HTML"
                        className="border text-white mt-1"
                      />
                    </div>
                    <p className="">
                      Unleashing the Power of Pigments. Dive into our website,
                      where colors become an art form, driving performance and
                      igniting creativity in every project.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects__slider-card flex flex-col justify-center items-center">
                  <img src={arihant} alt="" className="" />
                  <div className="projects__slider-card-text px-4 mt-2 ">
                    <h1 className="text-2xl text-white">Arihant Pigments</h1>
                    <div className="flex flex-wrap">
                      <TechButton
                        value="JavaScript"
                        className="bg-amber-500 text-white mt-1"
                      />
                      <TechButton
                        value="Nodejs"
                        className="text-white bg-green-900 mt-1"
                      />
                      <TechButton
                        value="MongoDB"
                        className="bg-green-300 text-black mt-1"
                      />
                      <TechButton
                        value="CSS"
                        className="border text-white mt-1"
                      />
                      <TechButton
                        value="HTML"
                        className="border text-white mt-1"
                      />
                    </div>
                    <p className="">
                      Harnessing the Magic of Pigments. Discover our website,
                      where pigments take center stage, infusing vibrancy and
                      depth into every design.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects__slider-card flex flex-col justify-center items-center">
                  <img src={veselka} alt="" className="" />
                  <div className="projects__slider-card-text px-4 mt-2">
                    <h1 className="text-2xl text-white">
                      Lifeskapes Interiors
                    </h1>
                    <div className="flex">
                      <TechButton
                        value="JavaScript"
                        className="bg-amber-500 text-white"
                      />
                      <TechButton value="SCSS" className="border text-white" />
                      <TechButton value="HTML" className="border text-white" />
                    </div>
                    <p className="">
                      Where Imagination Meets Reality. Explore our platform,
                      where innovative design concepts come to life, creating
                      spaces that blend artistry and functionality seamlessly.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex slider-arrows absolute top-[50%] w-full justify-between items-center">
            <div className="arrow_container_left1 mr-3">
              <FaArrowRight />
            </div>
            <div className="arrow_container_right1">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <Button value="See More" className="project_see_more_phone" />
      </div>
    </>
  );
};

export default Projects;
