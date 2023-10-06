import React from "react";
import "../../assets/scss/projects.scss";
import Button from "../../components/UI/Button";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import veselka from "../../assets/images/veselka.png";
import TechButton from "../UI/TechButton";

import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <div className="projects  flex justify-center px-7 mt-20 md:mt-0 pb-10">
      <div className="projects__sub-container w-[100vw] relative max-w-[1600px]">
        <div className="w-full projects__title-container flex justify-between items-center mb-4">
          <h1 className="font-bold text-white text-[30px]">
            Let’s Have a Look at our <span>Projects</span>
          </h1>
          <Button value="See More" />
        </div>
        <div className="projects__slider-container">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
                  <div className="flex">
                    <TechButton
                      value="JavaScript"
                      className="bg-amber-500 text-white"
                    />
                    <TechButton value="SCSS" className="border text-white" />
                    <TechButton value="HTML" className="border text-white" />
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
                <img src={veselka} alt="" className="" />
                <div className="projects__slider-card-text px-4 mt-2">
                  <h1 className="text-2xl text-white">Veselka Interiors</h1>
                  <div className="flex">
                    <TechButton
                      value="JavaScript"
                      className="bg-amber-500 text-white"
                    />
                    <TechButton value="SCSS" className="border text-white" />
                    <TechButton value="HTML" className="border text-white" />
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
              <div className="projects__slider-card flex flex-col justify-center items-center">
                <img src={veselka} alt="" className="" />
                <div className="projects__slider-card-text px-4 mt-2">
                  <h1 className="text-2xl text-white">Veselka Interiors</h1>
                  <div className="flex">
                    <TechButton
                      value="JavaScript"
                      className="bg-amber-500 text-white"
                    />
                    <TechButton value="SCSS" className="border text-white" />
                    <TechButton value="HTML" className="border text-white" />
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
              <div className="projects__slider-card flex flex-col justify-center items-center">
                <img src={veselka} alt="" className="" />
                <div className="projects__slider-card-text px-4 mt-2 ">
                  <h1 className="text-2xl text-white">Veselka Interiors</h1>
                  <div className="flex">
                    <TechButton
                      value="JavaScript"
                      className="bg-amber-500 text-white"
                    />
                    <TechButton value="SCSS" className="border text-white" />
                    <TechButton value="HTML" className="border text-white" />
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
              <div className="projects__slider-card flex flex-col justify-center items-center">
                <img src={veselka} alt="" className="" />
                <div className="projects__slider-card-text px-4 mt-2">
                  <h1 className="text-2xl text-white">Veselka Interiors</h1>
                  <div className="flex">
                    <TechButton
                      value="JavaScript"
                      className="bg-amber-500 text-white"
                    />
                    <TechButton value="SCSS" className="border text-white" />
                    <TechButton value="HTML" className="border text-white" />
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
    </div>
  );
};

export default Projects;
