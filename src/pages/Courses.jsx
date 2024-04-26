import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Avatar from "../components/Avatar";
import Navbar from "../components/Navbar";
import { IoIosEye } from "react-icons/io";
import Copyright from "../components/Copyright";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 7,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 8,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 9,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
    {
      id: 10,
      title: "Lorem ipsum dolor sit amet consectetur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos corrupti possimus optio! Doloremque qui itaque voluptates nemo quisquam molestiae?",
      fee: "£1000",
    },
  ];

  const allCourses = courses.map((course, index) => {
    return (
      <tr key={index} className="odd:bg-white even:bg-purple-100 border-b">
        <th scope="row" className="px-6 py-4 w-[5%] font-medium text-gray-900">
          {course.id}
        </th>
        <td className="px-6 py-4 w-3/12">{course.title}</td>
        <td className="px-6 py-4 w-1/2">{course.description}</td>
        <td className="px-6 py-4 w-[10%]">{course.fee}</td>
        <td className="px-6 py-4 w-[10%]">
          <Link
            to="/courses/8"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            <IoIosEye className="text-primaryPurple hover:text-purple-800 h-4 w-12" />
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="flex justify-center items-center pl-12 md:p-0 w-full">
      <Navbar />
      <div className="relative flex flex-col justify-between gap-4 overflow-x-auto h-screen p-4 md:p-8 w-full">
        <div className="flex flex-col justify-start items-start gap-4 w-full">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
            <SearchBar />
            <Avatar />
          </div>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-200">
            <thead className="text-xs text-white uppercase bg-primaryPurple border border-gray-200 w-full">
              <tr>
                <th scope="col" className="px-6 py-3 w-[5%]">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 w-3/12">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 w-1/2">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 w-[10%]">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 w-[10%]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{allCourses}</tbody>
          </table>
        </div>

        <Copyright />
      </div>
    </div>
  );
};

export default Courses;
