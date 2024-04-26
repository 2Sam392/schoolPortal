import { useState } from "react";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

const Graduation = () => {
  const [eligible, setEligible] = useState(true);

  return (
    <div className="flex justify-center items-start pl-12 md:p-0 w-full">
      <Navbar />
      <div className="flex flex-col justify-between items-start flex-grow gap-48 md:gap-6 h-screen p-4 md:p-8 w-full">
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <Avatar />

          <div className="flex flex-col justify-start items-start gap-4 w-full">
            <h2 className="text-xl md:text-4xl font-semibold text-primaryBlack">
              Graduation
            </h2>
            <p className="text-slate-600 text-xs md:text-base">
              You need to pay any outstanding course and library fees before you
              are eligible to graduate
            </p>
            <p className="text-slate-600 text-xs md:text-base">
              Your current status is:{" "}
              {eligible ? (
                <span className="text-primaryPurple font-semibold">
                  eligible to graduate
                </span>
              ) : (
                <span className="text-red-600 font-medium">
                  ineligible to graduate
                </span>
              )}
            </p>
            {!eligible && (
              <p className="text-red-600 text-xs font-medium md:text-base">
                Please login to your payment portal to pay your outstanding
                balance
              </p>
            )}
          </div>
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default Graduation;
