import React, { useRef } from 'react';
import bg1 from '../assets/bg1.webp';
import Register from '../Components/Register';
import Login from '../Components/Login';

const Auth = () => {
  const register = useRef(null);
  const login = useRef(null);

  const toogleForms = () => {
    register.current.classList.toggle('hidden');
    login.current.classList.toggle('hidden');
  };

  return (
    <div
      className="grid place-items-center antialiased w-[100dvw] h-[100dvh] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg1})`,
      }}>
      <div
        ref={register}
        className="max-sm:px-2 max-sm:w-full transition-[display] duration-[0.5s] hidden">
        <Register toogleForms={toogleForms} />
      </div>

      <div
        ref={login}
        className="max-sm:px-2 max-sm:w-full transition-[display] duration-[0.5s]">
        <Login toogleForms={toogleForms} />
      </div>
    </div>
  );
};

export default Auth;
