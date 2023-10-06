// import React, { useEffect, useState } from "react";
// import "../../assets/scss/CustomCursor.scss";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const onMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const onMouseEnter = () => {
//       setHovered(true);
//     };

//     const onMouseLeave = () => {
//       setHovered(false);
//     };

//     window.addEventListener("mousemove", onMouseMove);
//     window.addEventListener("mouseenter", onMouseEnter);
//     window.addEventListener("mouseleave", onMouseLeave);

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("mouseenter", onMouseEnter);
//       window.removeEventListener("mouseleave", onMouseLeave);
//     };
//   }, []);

//   return (
//     <div className={`custom-cursor ${hovered ? "hovered" : ""}`}>
//       <div
//         className="cursor cursor-inner"
//         style={{ left: `${position.x}px`, top: `${position.y}px` }}
//       ></div>
//       <div
//         className="cursor cursor-outer"
//         style={{ left: `${position.x}px`, top: `${position.y}px` }}
//       ></div>
//     </div>
//   );
// };

// export default CustomCursor;


// CustomCursor.js

import React, { useEffect, useState } from "react";
import "../../assets/scss/CustomCursor.scss";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Delay the outer cursor by 0.15 seconds
      setTimeout(() => {
        setOuterPosition({ x: e.clientX, y: e.clientY });
      }, 150); // 150 milliseconds (0.15 seconds)
    };

    const onMouseEnter = () => {
      setHovered(true);
    };

    const onMouseLeave = () => {
      setHovered(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className={`custom-cursor ${hovered ? "hovered" : ""}`}>
      <div
        className="cursor cursor-inner"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className="cursor cursor-outer"
        style={{ left: `${outerPosition.x}px`, top: `${outerPosition.y}px` }}
      ></div>
    </div>
  );
};

export default CustomCursor;

