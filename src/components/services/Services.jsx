import React, { useState, useEffect, useRef } from "react";
import service1 from "../../assets/images/service1.png";
import app from "../../assets/images/sapp.png";
import ecommerce from "../../assets/images/secommerce.png";
import ar from "../../assets/video/sarr.mp4";
import aiml from "../../assets/video/saiml.mp4";
// import iot from "../../assets/video/siot.mp4";
import game from "../../assets/video/sgame.mp4";
import iot from "../../assets/images/siot.jpg";
import "../../assets/scss/services.scss";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
const [slidenumber, setSlideNumber] = useState(null);
const aimlVideoRef = useRef(null);
const arvrVideoRef = useRef(null);
const gameVideoRef = useRef(null);

useEffect(() => {
  setSlideNumber(2);
}, []);

useEffect(() => {
    if (slidenumber === 1) {
      // Play the AIML video when slidenumber is 1
      if (aimlVideoRef.current) {
        aimlVideoRef.current.play();
      }
    } else {
      // Pause the AIML video when slidenumber is not 1
      if (aimlVideoRef.current) {
        aimlVideoRef.current.pause();
      }
    }

    if (slidenumber === 5) {
      // Play the AIML video when slidenumber is 1
      if (arvrVideoRef.current) {
        arvrVideoRef.current.play();
      }
    } else {
      // Pause the AIML video when slidenumber is not 1
      if (arvrVideoRef.current) {
        arvrVideoRef.current.pause();
      }
    }

        if (slidenumber === 6) {
          // Play the AIML video when slidenumber is 1
          if (gameVideoRef.current) {
            gameVideoRef.current.play();
          }
        } else {
          // Pause the AIML video when slidenumber is not 1
          if (gameVideoRef.current) {
            gameVideoRef.current.pause();
          }
        }
}, [slidenumber]);

const handleSlideChange = (swiper) => {
  setSlideNumber(swiper.realIndex);
};
  return (
    <div className="services h-min-[100vh] w-[100vw] max-w-[1600px]">
      <div className="mt-[130px] servicessub w-full">
        <h1 className="w-full border-b ourservicestitle font-bold">
          Our <span>Services</span>
        </h1>
        <div className="main_container">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            onSlideChange={handleSlideChange}
            initialSlide={2}
            onSwiper={(swiper) => console.log(swiper)}
            acitveIndex={3}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1450: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={{
              nextEl: ".arrow_container_right",
              prevEl: ".arrow_container_left",
              clickable: true,
            }}
            modules={[Navigation, Autoplay]}
          >
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card">
                <h1>IoT Embedded</h1>
                {/* <div className="ar_background_div">
                  <div className="ar_first_div"></div>
                  <div className="ar_second_div"></div>
                </div>
                <div className="video_div">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={iot}
                    className="relative ar_video" // Add the source directly to the video element
                  />
                </div> */}
                <img src={iot} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card">
                <h1>Ai & ML Development</h1>
                <div className="ar_background_div">
                  <div className="ar_first_div"></div>
                  <div className="ar_second_div"></div>
                </div>
                <div className="video_div">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={aiml}
                    className="relative ar_video" // Add the source directly to the video element
                    ref={aimlVideoRef}
                  />
                </div>
                {/* <img src={service1} alt="" /> */}
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card">
                <h1>Web Development</h1>
                <img src={service1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card">
                <h1>App Development</h1>
                <img src={app} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card">
                <h1>Ecommerce Solutions</h1>
                <img src={ecommerce} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card relative overflow-hidden">
                <h1>AR/VR Development</h1>
                <div className="ar_background_div">
                  <div className="ar_first_div"></div>
                  <div className="ar_second_div"></div>
                </div>
                <div className="video_div">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={ar}
                    className="relative ar_video" // Add the source directly to the video element
                    ref={arvrVideoRef}
                  />
                </div>
                {/* <img src={service1} alt="" className="ar_img" /> */}
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card">
                <h1>Game Development</h1>
                <div className="ar_background_div">
                  <div className="ar_first_div"></div>
                  <div className="ar_second_div"></div>
                </div>
                <div className="video_div">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={game}
                    className="relative ar_video" // Add the source directly to the video element
                    ref={gameVideoRef}
                  />
                </div>
                {/* <img src={service1} alt="" /> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex arrows w-full justify-center items-center">
          <div
            className={
              slidenumber === 0
                ? `arrow_container_left_inactive -rotate-180 mr-3`
                : `arrow_container_left -rotate-180 mr-3`
            }
          >
            <FaArrowRight />
          </div>
          <div
            className={
              slidenumber === 6
                ? `arrow_container_right_inactive`
                : `arrow_container_right`
            }
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
