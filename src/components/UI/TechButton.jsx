import React from 'react'

const TechButton = (props) => {
  return (
    <button
      className={`${props.className} h-fit flex rounded-full px-3 text-sm items-center justify-center mx-1`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default TechButton