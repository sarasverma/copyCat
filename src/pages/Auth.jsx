import React, { useRef } from "react";
import bg1 from "../assets/bg1.webp";
import Register from "../Components/Register";
import Login from "../Components/Login";

const Auth = () => {
  const register = useRef(null);
  const login = useRef(null);

  return (
    <div
      className="grid place-items-center antialiased w-[100dvw] h-[100dvh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      {/* <div ref={register}>
        <Register />
      </div> */}
      <div ref={login}>
        <Login />
      </div>
    </div>
  );
};

export default Auth;
