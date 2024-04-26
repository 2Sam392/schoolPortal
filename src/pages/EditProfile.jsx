import { useState } from "react";
import Navbar from "../components/Navbar";
import Avatar from "../components/Avatar";
import Copyright from "../components/Copyright";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    <div className="flex justify-center items-start pl-12 md:p-0 w-full">
      <Navbar />
      <div className="flex flex-col justify-between items-start gap-6 h-screen p-4 md:p-8 w-full">
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <Avatar />

          <div className="flex flex-col justify-start items-start gap-4 w-full">
            <h2 className="text-xl md:text-4xl font-semibold text-primaryBlack">
              Edit Student Profile
            </h2>

            <div className="flex flex-col justify-between items-start gap-2 w-full md:w-1/5">
              <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="w-full p-2 rounded bg-[#FAFBFE] outline-none border text-xs md:text-sm"
              />
            </div>

            <div className="flex flex-col justify-between items-start gap-2 w-full md:w-1/5">
              <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="w-full p-2 rounded bg-[#FAFBFE] outline-none border text-xs md:text-sm"
              />
            </div>

            <button className="text-white text-xs md:text-sm font-semibold text-center bg-primaryPurple hover:bg-purple-800 p-2 mt-2 rounded w-full md:w-[10%]">
              Submit
            </button>
          </div>
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default EditProfile;
