import React, { useState, useEffect } from "react";
import webdev from "../../assets/svg/webdev.svg";
import appdev from "../../assets/svg/appdev.svg";
import vrdev from "../../assets/svg/vrdev.svg";
import ecommerce from "../../assets/svg/ecommerce.svg";
import aiml from "../../assets/svg/aiml.svg"
import iot from "../../assets/svg/iot.svg"
import "../../assets/scss/app.scss";
import Button from "../UI/Button";
import '../../assets/scss/hero.scss';

const Hero = (props) => {
  
  useEffect(() => {
    let counter = 2;
    const first = document.querySelector(".indicators span:nth-child(1)");
    const second = document.querySelector(".indicators span:nth-child(2)");
    const third = document.querySelector(".indicators span:nth-child(3)");
    const fourth = document.querySelector(".indicators span:nth-child(4)");
    const fifth = document.querySelector(".indicators span:nth-child(5)");
    const sixth = document.querySelector(".indicators span:nth-child(6)");

    const carousel = document.querySelector(".carousel-item:nth-child(1)");
    const carousel2 = document.querySelector(".carousel-item:nth-child(2)");
    const carousel3 = document.querySelector(".carousel-item:nth-child(3)");
    const carousel4 = document.querySelector(".carousel-item:nth-child(4)");
    const carousel5 = document.querySelector(".carousel-item:nth-child(5)");
    const carousel6 = document.querySelector(".carousel-item:nth-child(6)");

    const run = setInterval(() => {
      if (counter === 1) {
        first.classList.add("active");
        second.classList.remove("active");
        third.classList.remove("active");
        fourth.classList.remove("active");
        fifth.classList.remove("active");
        sixth.classList.remove("active");

        carousel.classList.remove("active5");
        carousel2.classList.remove("active5");
        carousel3.classList.remove("active5");
        carousel4.classList.remove("active5");
        carousel5.classList.remove("active5");
        carousel6.classList.remove("active5");
      } else if (counter === 2) {
        first.classList.remove("active");
        second.classList.add("active");
        third.classList.remove("active");
        fourth.classList.remove("active");
        fifth.classList.remove("active");
        sixth.classList.remove("active");

        carousel.classList.add("active1");
        carousel2.classList.add("active1");
        carousel3.classList.add("active1");
        carousel4.classList.add("active1");
        carousel5.classList.add("active1");
        carousel6.classList.add("active1");
      } else if (counter === 3) {
        first.classList.remove("active");
        second.classList.remove("active");
        third.classList.add("active");
        fourth.classList.remove("active");
        fifth.classList.remove("active");
        sixth.classList.remove("active");

        carousel.classList.remove("active1");
        carousel2.classList.remove("active1");
        carousel3.classList.remove("active1");
        carousel4.classList.remove("active1");
        carousel5.classList.remove("active1");
        carousel6.classList.remove("active1");

        carousel.classList.add("active2");
        carousel2.classList.add("active2");
        carousel3.classList.add("active2");
        carousel4.classList.add("active2");
        carousel5.classList.add("active2");
        carousel6.classList.add("active2");
      } else if (counter === 4) {
        first.classList.remove("active");
        second.classList.remove("active");
        third.classList.remove("active");
        fourth.classList.add("active");
        fifth.classList.remove("active");
        sixth.classList.remove("active");

        carousel.classList.remove("active2");
        carousel2.classList.remove("active2");
        carousel3.classList.remove("active2");
        carousel4.classList.remove("active2");
        carousel5.classList.remove("active2");
        carousel6.classList.remove("active2");

        carousel.classList.add("active3");
        carousel2.classList.add("active3");
        carousel3.classList.add("active3");
        carousel4.classList.add("active3");
        carousel5.classList.add("active3");
        carousel6.classList.add("active3");
      } else if (counter === 5) {
        first.classList.remove("active");
        second.classList.remove("active");
        third.classList.remove("active");
        fourth.classList.remove("active");
        fifth.classList.add("active");
        sixth.classList.remove("active");

        carousel.classList.remove("active3");
        carousel2.classList.remove("active3");
        carousel3.classList.remove("active3");
        carousel4.classList.remove("active3");
        carousel5.classList.remove("active3");
        carousel6.classList.remove("active3");

        carousel.classList.add("active4");
        carousel2.classList.add("active4");
        carousel3.classList.add("active4");
        carousel4.classList.add("active4");
        carousel5.classList.add("active4");
        carousel6.classList.add("active4");
      } else if (counter === 6) {
        first.classList.remove("active");
        second.classList.remove("active");
        third.classList.remove("active");
        fourth.classList.remove("active");
        fifth.classList.remove("active");
        sixth.classList.add("active");

        carousel.classList.remove("active4");
        carousel2.classList.remove("active4");
        carousel3.classList.remove("active4");
        carousel4.classList.remove("active4");
        carousel5.classList.remove("active4");
        carousel6.classList.remove("active4");

        carousel.classList.add("active5");
        carousel2.classList.add("active5");
        carousel3.classList.add("active5");
        carousel4.classList.add("active5");
        carousel5.classList.add("active5");
        carousel6.classList.add("active5");
      }
      counter++;
      if (counter > 6) {
        counter = 1;
      }
    }, 3000);

    return () => {
      clearInterval(run);
    };
  }, []);

  return (
    <>
      <div
        className="hero flex flex-col justify-center items-center w-[100vw] max-w-[1600px]"
        id={props.id}
      >
        <div className="carousel flex w-full mt-40 pl-0 md:pl-6">
          <div className="carousel-item min-w-full flex items-center justify-center max-w-[1600px] active">
            <div className="text-container w-2/5">
              <h1 className="text-4xl md:text-6xl font-bold">Web</h1>
              <h2 className="text-xl md:text-3xl font-bold">Development</h2>
              <p className="text-lg md:text-xl">
                Creating Game Magic that Captivates, converst, and Delights
              </p>
              <Button
                className="block mt-2
              "
                value="Get a Quote"
              />
            </div>
            <div className="w-3/5 svg-container flex w-full justify-center items-center">
              <img
                src={webdev}
                alt=""
                className="object-contain h-[40vh] md:h-[60vh] max-h-[600px]"
              />
            </div>
          </div>
          <div className="carousel-item min-w-full flex items-center justify-center max-w-[1600px] active">
            <div className="text-container w-2/5">
              <h1 className="text-4xl md:text-6xl font-bold">App</h1>
              <h2 className="text-xl md:text-3xl font-bold">Development</h2>
              <p className="text-lg md:text-xl">
                Transform your ideas into dynamic mobile applications that
                engage your audience on iOS and Android platforms.
              </p>
              <Button className="block mt-2" value="Get a Quote" />
            </div>
            <div className="w-3/5 svg-container  flex w-full justify-center items-center">
              <img
                src={appdev}
                alt=""
                className="object-contain h-[40vh] md:h-[60vh] max-h-[600px]"
              />
            </div>
          </div>
          <div className="carousel-item min-w-full flex items-center justify-center max-w-[1600px] active">
            <div className="text-container w-2/5 ">
              <h1 className="text-4xl md:text-6xl font-bold">Ecommerce</h1>
              <h2 className="text-xl md:text-3xl font-bold">Solution</h2>
              <p className="text-lg md:text-xl">
                Boost your sales and expand your reach with our customized
                e-commerce solutions, optimized for success.
              </p>
              <Button className="block mt-2" value="Get a Quote" />
            </div>
            <div className="w-3/5 svg-container  flex w-full justify-center items-center">
              <img
                src={ecommerce}
                alt=""
                className="object-contain h-[40vh] md:h-[60vh] max-h-[600px]"
              />
            </div>
          </div>
          <div className="carousel-item min-w-full flex items-center justify-center max-w-[1600px] active">
            <div className="text-container w-2/5">
              <h1 className="text-4xl md:text-6xl font-bold">AR/VR</h1>
              <h2 className="text-xl md:text-3xl font-bold">Development</h2>
              <p className="text-lg md:text-xl">
                Immerse your audience in interactive experiences with
                cutting-edge Augmented and Virtual Reality gaming solutions.
              </p>
              <Button className="block mt-2" value="Get a Quote" />
            </div>
            <div className="w-3/5 svg-container  flex w-full justify-center items-center">
              <img
                src={vrdev}
                alt=""
                className="object-contain h-[40vh] md:h-[60vh] max-h-[600px]"
              />
            </div>
          </div>
          <div className="carousel-item min-w-full flex items-center justify-center max-w-[1600px] active">
            <div className="text-container w-2/5">
              <h1 className="text-4xl md:text-6xl font-bold">Ai/ML</h1>
              <h2 className="text-xl md:text-3xl font-bold">Development</h2>
              <p className="text-lg md:text-xl">
                Harness the power of Artificial Intelligence and Machine
                Learning to enhance efficiency and make data-driven decisions.
              </p>
              <Button className="block mt-2" value="Get a Quote" />
            </div>
            <div className="w-3/5 svg-container  flex w-full justify-center items-center">
              <img
                src={aiml}
                alt=""
                className="object-contain h-[40vh] md:h-[60vh] max-h-[600px]"
              />
            </div>
          </div>
          <div className="carousel-item min-w-full flex items-center justify-center max-w-[1600px] active">
            <div className="text-container w-2/5">
              <h1 className="text-4xl md:text-6xl font-bold">IoT Embedded</h1>
              <h2 className="text-xl md:text-3xl font-bold">
                System Development
              </h2>
              <p className="text-lg md:text-xl">
                Connect and control your devices with IoT embedded solutions,
                making your products smarter and more accessible.
              </p>
              <Button className="block mt-2" value="Get a Quote" />
            </div>
            <div className="w-3/5 svg-container  flex w-full justify-center items-center">
              <img
                src={iot}
                alt=""
                className="object-contain h-[40vh] md:h-[60vh] max-h-[600px]"
              />
            </div>
          </div>
        </div>
        <div className="indicators flex items-center md:pt-32">
          <span className="iniline-block h-[10px] w-[10px] rounded-full active"></span>
          <span className="iniline-block h-[10px] w-[10px] rounded-full "></span>
          <span className="iniline-block h-[10px] w-[10px] rounded-full "></span>
          <span className="iniline-block h-[10px] w-[10px] rounded-full "></span>
          <span className="iniline-block h-[10px] w-[10px] rounded-full "></span>
          <span className="iniline-block h-[10px] w-[10px] rounded-full "></span>
        </div>
      </div>
    </>
  );
};

export default Hero;
