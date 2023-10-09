import React, { useState, useEffect } from "react";
import "../../assets/scss/footer.scss";
import Button from "../UI/Button";
import logo from "../../assets/images/logo.png";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/Bs";
import {AiOutlineSend} from 'react-icons/Ai';


const footer = () => {
  return (
    <>
      <div className="footer w-full p-10">
        <div className="w-full footer_subcontainer">
          <div className="w-full footer_header border-b flex items-center justify-between pb-5">
            <h1 className="text-3xl font-bold text-white">
              Let's Connect there
            </h1>
            <Button value="Hire us" className="text-normal md:text-xl" />
          </div>
          <div className="flex footer_main justify-between w-full my-10">
            <div className="logo_container w-[40%] pr-10">
              <img src={logo} alt="" className="w-[40%]" />
              <p className="text-white mt-5">
                SvayambhuTech: Where Innovation Knows No Boundaries. We
                specialize in web apps, app development, e-commerce solutions,
                and cutting-edge AR/VR games. Let's bring your vision to life
              </p>
              <div className="flex social_icons w-[45%] md:w-[28%] mt-5 items-center justify-between">
                <div className="icons_container">
                  <BsInstagram className="icon" />
                </div>
                <div className="icons_container">
                  <BsLinkedin className="icon" />
                </div>
                <div className="icons_container">
                  <BsFacebook className="icon" />
                </div>
              </div>
            </div>
            <div className="navigation h-full w-[15%]">
              <h1 className="text-xl">Navigation</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="contact_footer w-[15%]">
              <h1 className="text-xl">Contact</h1>
              <ul>
                <li>
                  <a href="tel:7666675791">+91-7666675791</a>
                </li>
                <li>
                  <a href="tel:7972728189">+91-7972728189</a>
                </li>
                <li>
                  <a href="mailto:svayambhutech@gmail.com">
                    svayambhutech@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="getthelatest w-[30%]">
              <h1 className="text-xl">Get the latest information</h1>
              <div>
                <form action="" className="relative">
                  <input
                    type="email"
                    placeholder="email address"
                    className="w-full rounded-lg h-[40px] px-3 "
                  />
                  <div className="absolute email_send_icons bg-white flex items-center justify-center top-0 right-0 h-[40px] w-[40px] rounded-r-lg">
                    <AiOutlineSend />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full footer_header border-t flex items-center justify-center pt-5">
            <p className="text-white">
              Copyright @ 2023 Svayambhu Tech. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
