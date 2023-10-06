import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Button = (props) => {
  return (
    <>
        <button className={`btn btn-primary ${props.className} h-fit flex items-center justify-center`} onClick={props.onClick} >{props.value} <FaArrowRight className='ml-2 -rotate-45 text-xl'/> </button>
    </>
  )
}

export default Button