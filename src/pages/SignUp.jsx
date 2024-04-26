import { useState } from "react";
import student from "../assets/student.webp";
import logo from "../assets/leeds.webp";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-36 py-12 md:h-screen w-full">
        {/* Image */}
        <div className="relative flex justify-center items-center h-full w-full md:w-2/5">
          <img
            className="rounded-t-lg md:rounded-l-lg object-cover h-full w-full"
            src={student}
            alt="student"
          />
          <div className="absolute inset-0 bg-primaryBlack opacity-70 rounded"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-base md:text-3xl font-semibold leading-snug w-1/2 text-center">
              Leeds Beckett Student Portal
            </h2>
          </div>
        </div>

        {/* Form */}
        <div className="border border-solid rounded-b-lg md:rounded-r-lg flex flex-col justify-between items-start gap-4 p-6 h-full w-full md:w-3/5">
          <div>
            <img src={logo} alt="School Logo" />
          </div>

          <form className="flex flex-col justify-between items-center gap-6 w-full">
            <a href="/login" className="text-xs font-medium">
              Already have an account?{" "}
              <span className="text-sm font-bold underline hover:text-primaryPurple">
                Log In
              </span>
            </a>

            <div className="flex flex-col justify-between items-start gap-2 w-full md:w-3/5">
              <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="userName"
                value={formData.userName}
                className="w-full p-2 rounded bg-[#FAFBFE] outline-none border text-xs md:text-sm"
              />
            </div>

            <div className="flex flex-col justify-between items-start gap-2 w-full md:w-3/5">
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="w-full p-2 rounded bg-[#FAFBFE] outline-none border text-xs md:text-sm"
              />
            </div>

            <div className="flex flex-col justify-between items-start gap-2 w-full md:w-3/5">
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                className="w-full p-2 rounded bg-[#FAFBFE] outline-none border text-xs md:text-sm"
              />
            </div>

            <button className="text-white text-sm font-semibold bg-[#121213] hover:bg-primaryBlack p-2 rounded w-full md:w-3/5">
              Sign Up
            </button>
          </form>

          <div className="self-center">
            <p className="text-xs font-medium">
              Copyright © 2024. Leeds Beckett University.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
