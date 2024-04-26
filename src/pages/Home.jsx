import Navbar from "../components/Navbar";
import studentNoBg from "../assets/student-no-bg.webp";
import Avatar from "../components/Avatar";
import Copyright from "../components/Copyright";

const Home = () => {
  return (
    <div className="flex justify-center items-center pl-12 md:p-0 overflow-hidden w-full">
      <Navbar />
      <div className="flex flex-col justify-between items-center flex-grow gap-16 md:gap-40 h-screen p-4 md:p-8 w-full">
        <Avatar />

        <section className="relative flex flex-row md:flex-row-reverse justify-center items-center bg-primaryPurple md:py-24 pl-6 md:pl-16 rounded-3xl h-1/2 w-full">
          <div className="relative z-20 flex flex-col pb-8 md:pb-0 pt-12 md:pt-0 gap-6 w-full">
            <h2 className="text-white text-3xl md:text-4xl w-full md:w-3/5">
              Hello, Jane!
            </h2>
            <div>
              <p className="text-white text-sm md:text-base w-full md:w-3/5">
                Welcome to your portal!
              </p>
              <p className="text-white text-sm md:text-base w-full md:w-3/5">
                Perform different actions using the navigation bar on the left.
              </p>
            </div>
          </div>

          <img
            src={studentNoBg}
            alt=""
            className="absolute hidden md:block -top-30 right-0 bottom-0 z-20 w-1/2"
          />
        </section>

        <Copyright />
      </div>
    </div>
  );
};

export default Home;
