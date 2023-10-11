import React from "react";
import "../../assets/scss/contact.scss";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";


const Contact = (props) => {
  return (
    <>
      <div className="contact w-[100vw]  max-w-[1600px] flex justify-center" id={props.id}>
        <div className="contact_container flex w-full">
          <div className="contact_container-left w-[40%] px-2 md:px-10">
            <h1 className="text-[30px] font-bold">Contact Us</h1>
            <p>
              We would be happy to hear from you, please fill the form or mail us your requirements.
            </p>
            <div className="contact_details flex items-center mt-10">
              <h2 className="flex items-center w-[40%] details_sub">
                <IoMailOutline className="mr-2" />
                Email address
              </h2>
              <a
                href="mailto:svayambhutech@gmail.com"
                className="w-[60%] font-semibold flex details_sub"
              >
                svayambhutech@gmail.com
              </a>
            </div>
            <div className="contact_details flex items-center mt-5">
              <h2 className="flex items-center w-[40%] details_sub">
                <IoCallOutline className="mr-2" />
                Call us
              </h2>
              <div className="flex items-center w-[60%] details_sub">
                <a href="tel:7666675791" className="font-semibold">
                  7666675791 /
                </a>
                <a href="tel:7972728189" className="font-semibold">
                  {" "}
                  &nbsp; 7972728189
                </a>
              </div>
            </div>
          </div>
          <div className="contact_container-right w-[60%] px-2 md:px-10">
            <form
              action=""
              className="p-10 w-full flex flex-col justify-between min-h-[550px]"
            >
              <div className="flex justify-between mobile_col_input">
                <div className="flex flex-col w-[45%] mobile_col_sub">
                  <label htmlFor="" className="font-medium mb-1 md:mb-3">
                    First name
                  </label>
                  <input type="text" name="" id="" />
                </div>
                <div className="flex flex-col w-[45%] mobile_col_sub mt-1 md:mt-0">
                  <label htmlFor="" className="font-medium mb-1 md:mb-3">
                    Last name
                  </label>
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="flex justify-between mobile_col_input">
                <div className="flex flex-col w-[45%] mobile_col_sub mt-1 md:mt-0">
                  <label htmlFor="" className="font-medium mb-1 md:mb-3">
                    Email address
                  </label>
                  <input type="email" name="" id="" />
                </div>
                <div className="flex flex-col w-[45%] mobile_col_sub mt-1 md:mt-0">
                  <label htmlFor="" className="font-medium mb-1 md:mb-3">
                    Phone number
                  </label>
                  <input type="number" name="" id="" />
                </div>
              </div>
              <div className="flex flex-col mt-1 md:mt-0">
                <label htmlFor="" className="font-medium mb-1 md:mb-3">
                  What would you like to discuss?
                </label>
                <textarea name="" id="" cols="30" rows="7"></textarea>
              </div>
              <div className="mt-3">
                <button className="submit_btn text-xl ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
