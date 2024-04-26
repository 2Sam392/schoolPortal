import { useState } from "react";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

const CoursePage = () => {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="flex justify-center items-center pl-12 md:p-0 w-full">
      <Navbar />
      <div className="flex flex-col justify-between items-start gap-6 h-screen p-4 md:p-8 w-full">
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <Avatar />

          {enrolled && (
            <p className="text-slate-600 text-xs bg-green-200 px-4 py-1 w-full">
              You are enrolled in this course. Please log into the Payment
              Portal to pay the invoice reference: ABCD1234.
            </p>
          )}
          <h2 className="text-xl md:text-4xl font-semibold text-primaryBlack">
            Software Engineering for Service Computing
          </h2>
          <p className="text-slate-600 text-xs md:text-base font-normal w-full md:w-4/5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
            asperiores numquam, reiciendis aspernatur omnis quis. Quisquam sit
            saepe, quae, similique officiis quas, facilis corrupti atque totam
            quasi quo ab vero! Voluptatem qui incidunt iusto commodi harum
            maxime quidem optio quam corrupti maiores est aut accusamus
            molestias, quae magnam necessitatibus odit.
          </p>
          <p className="text-slate-600 text-xs md:text-base">
            <span className="font-bold">Fee:</span> £1000
          </p>
          {!enrolled && (
            <button
              className="text-white text-xs md:text-sm font-semibold bg-primaryPurple hover:bg-purple-800 p-2 rounded w-full md:w-1/5"
              onClick={() => setEnrolled(true)}
            >
              Enrol
            </button>
          )}
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default CoursePage;
