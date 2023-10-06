import React, {useState, useEffect} from "react";
import service1 from "../../assets/images/service1.png";
import "../../assets/scss/services.scss";
import { FaArrowRight } from "react-icons/fa";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";

import 'swiper/css';
import "swiper/css/navigation";


const Services = () => {

  const [slidenumber, setSlideNumber] = useState(null);

  useEffect(()=>{
    setSlideNumber(2)
  }, [])

  const handleSlideChange = (swiper) => {
    setSlideNumber(swiper.realIndex)
    console.log(swiper.realIndex)
  }
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
                <h1>Blockchain Development</h1>
                <img src={service1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card">
                <h1>Blockchain Development</h1>
                <img src={service1} alt="" />
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
                <img src={service1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <div className="service_card">
                <h1>Ecommerce</h1>
                <img src={service1} alt="" />
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
          <div className={slidenumber===4 ? `arrow_container_right_inactive` : `arrow_container_right`}>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;