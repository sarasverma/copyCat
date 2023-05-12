import React from "react";
import { FaUser } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { TbPassword } from "react-icons/tb";

const Register = ({ toogleForms }) => {
  return (
    <form className="py-10 px-5 w-[500px] flex flex-col gap-6 rounded-xl max-sm:w-[100%] text-white text-xl bg-orange-200  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
      <div className="info text-center">
        <h1 className="text-center">Welcome 😼</h1>
        <p className="text-sm">
          <span>Already have account? </span>
          <button
            className="text-sky-500"
            onClick={(e) => {
              e.preventDefault();
              toogleForms();
            }}
          >
            Login
          </button>
        </p>
      </div>
      <div className="relative">
        <FaUser className="absolute top-[15px] left-[10px]" />
        <input
          type="text"
          placeholder="Name"
          autoComplete="on"
          className="px-10 py-2.5 w-full bg-transparent focus:border-b-2 border-orange-500 outline-none placeholder:text-white"
        />
      </div>
      <div className="relative">
        <SiMinutemailer className="absolute top-[15px] left-[10px]" />
        <input
          type="email"
          placeholder="Email"
          autoComplete="on"
          className="px-10 py-2.5 w-full bg-transparent focus:border-b-2 border-orange-500 outline-none placeholder:text-white"
        />
      </div>
      <div className="relative">
        <TbPassword className="absolute top-[15px] left-[10px]" />
        <input
          type="password"
          placeholder="Password"
          autoComplete="on"
          className="px-10 py-2.5 w-full bg-transparent focus:border-b-2 border-orange-500 outline-none placeholder:text-white"
        />
      </div>
      <div>
        <button className="py-2.5 w-full bg-orange-500 rounded-xl">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
