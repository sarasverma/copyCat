import React, { useRef } from "react";
import { ShapeHome } from "../Components/Shapes";
import { Link } from "react-router-dom";
import Cat from "../assets/cat.png";

const Home = () => {
  const eyeRef1 = useRef(null);
  const eyeRef2 = useRef(null);

  const handleMouseMove = (event) => {
    const eye1 = eyeRef1.current;
    const x1 = eye1.offsetLeft + eye1.offsetWidth / 2;
    const y1 = eye1.offsetTop + eye1.offsetHeight / 2;
    const rad1 = Math.atan2(event.pageX - x1, event.pageY - y1);
    const rot1 = rad1 * (180 / Math.PI) * -1 + 180;

    eye1.style.transform = `rotate(${rot1}deg)`;

    const eye2 = eyeRef2.current;
    const x2 = eye2.offsetLeft + eye2.offsetWidth / 2;
    const y2 = eye2.offsetTop + eye2.offsetHeight / 2;
    const rad2 = Math.atan2(event.pageX - x2, event.pageY - y2);
    const rot2 = rad2 * (180 / Math.PI) * -1 + 180;

    eye2.style.transform = `rotate(${rot2}deg)`;
  };

  return (
    <>
      <div
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}
        className="fixed top-0 left-0 w-[100dvw] h-[100dvh] grid place-content-center gap-11 bg-gradient-to-b from-orange-500 to-yellow-500 outline-none"
      >
        <div className="welcome text-center text-7xl max-sm:text-5xl font-bold mt-[-45px] bg-gradient-to-r from-[#282a0f] to-orange-700 text-transparent bg-clip-text animate-pulse">
          WELCOME TO COPY CAT
        </div>

        <div className="links flex gap-11 flex-wrap w-full justify-center items-center text-center">
          <Link
            to="/create"
            className="p-4 text-3xl max-sm:text-xl hover:bg-[#282a0f] text-white rounded-3xl"
          >
            Create clip
          </Link>
          <Link
            to="/fetch"
            className="p-4 text-3xl max-sm:text-xl hover:bg-[#282a0f] text-white rounded-3xl"
          >
            Fetch clip
          </Link>
        </div>

        <div className="cat w-full flex justify-center">
          <div
            className="eye relative bg-[#ccc] inline-block h-[30px] w-[30px] rounded-[50%] top-[30px] left-[80px] after:absolute after:w-2.5 after:h-2.5 after:content-[''] after:rounded-[50%] after:right-2.5 after:bottom-[17px] after:bg-[#000]"
            ref={eyeRef1}
          ></div>
          <div
            className="eye relative bg-[#ccc] inline-block h-[30px] w-[30px] rounded-[50%] top-[30px] left-[80px] after:absolute after:w-2.5 after:h-2.5 after:content-[''] after:rounded-[50%] after:right-2.5 after:bottom-[17px] after:bg-[#000]"
            ref={eyeRef2}
          ></div>
          <img src={Cat} alt="cat" width="200px" className="ml-[-60px]" />
        </div>
      </div>
      <ShapeHome />
    </>
  );
};

export default Home;
