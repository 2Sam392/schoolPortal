import { useEffect, useState } from "react";
import logo3 from "../assets/leeds3.webp";
import logo4 from "../assets/leeds4.webp";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { PiBookFill } from "react-icons/pi";
import { PiScrollFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [currentPage, setCurrentPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const menu = [
    {
      title: "Home",
      icon: <IoMdHome className={`${!openNav && "text-xl"}`} />,
      url: "/home",
    },
    {
      title: "All Courses",
      icon: <PiBookFill className={`${!openNav && "text-xl"}`} />,
      url: "/courses",
    },
    {
      title: "My Enrolments",
      icon: <PiScrollFill className={`${!openNav && "text-xl"}`} />,
      url: "/enrolments",
    },
    {
      title: "Student Profile",
      icon: <CgProfile className={`${!openNav && "text-xl"}`} />,
      url: "/profile",
    },
    {
      title: "Graduation",
      icon: <FaGraduationCap className={`${!openNav && "text-xl"}`} />,
      url: "/graduation",
    },
    {
      title: "Sign Out",
      icon: <PiSignOutBold className={`${!openNav && "text-xl"}`} />,
      url: "/login",
    },
  ];

  return (
    <>
      <div
        className={`fixed md:static top-0 left-0 bg-primaryBlack h-screen flex flex-col justify-start items-start gap-12 z-50 ${
          openNav ? "w-full md:w-[350px] p-4" : "w-[15%] md:w-[4%] py-4 px-2"
        } transition-all duration-300`}
      >
        <div
          className={`relative flex ${
            !openNav && "flex-col gap-4"
          } justify-between items-center w-full`}
        >
          {openNav ? (
            <img src={logo3} alt="" className="w-48" />
          ) : (
            <img src={logo4} alt="" className="w-10" />
          )}
          <FaArrowLeftLong
            className={`cursor-pointer text-white ${!openNav && "rotate-180"}`}
            onClick={() => setOpenNav((prevOpenNav) => !prevOpenNav)}
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-4 w-full">
          {menu.map((menuItem, index) => {
            const isActive = currentPage === menuItem.url;

            return (
              <div key={index} className={`w-full cursor-pointer py-2`}>
                <Link
                  to={menuItem.url}
                  className={`flex justify-start ${
                    !openNav && "justify-center"
                  } items-center gap-2 font-medium text-sm text-white hover:text-primaryPurple ${
                    isActive && "text-primaryPurple"
                  }`}
                >
                  {menuItem.icon}
                  <span className={`${openNav ? "block" : "hidden"}`}>
                    {menuItem.title}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
