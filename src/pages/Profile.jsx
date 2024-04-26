import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";
import Copyright from "../components/Copyright";

const Profile = () => {
  const studentId = 4;

  return (
    <div className="flex justify-center items-center pl-12 md:p-0 w-full">
      <Navbar />
      <div className="flex flex-col justify-between items-start gap-6 h-screen p-4 md:p-8 w-full">
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <Avatar />

          <div className="flex flex-col justify-start items-start gap-4 w-full">
            <h2 className="text-xl md:text-4xl font-semibold text-primaryBlack">
              Student Profile
            </h2>
            <p className="text-slate-600 text-xs md:text-base">
              <span className="font-bold">First Name:</span> Jane
            </p>
            <p className="text-slate-600 text-xs md:text-base">
              <span className="font-bold">Last Name:</span> Doe
            </p>
            <p className="text-slate-600 text-xs md:text-base">
              <span className="font-bold">Student ID:</span> a12345678
            </p>
            <Link
              to={`/${studentId}/edit-profile`}
              className="text-white text-xs md:text-sm font-semibold text-center bg-primaryPurple hover:bg-purple-800 p-2 mt-2 rounded w-full md:w-[10%]"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default Profile;
