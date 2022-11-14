import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import logo from "../../assets/logo.png";

const SideNav = () => {
  const SideLinks = [
    {
      linkName: "Tutors",
      icon: <FaChalkboardTeacher className="text-2xl " />,
    },
    {
      linkName: "Explore Languages",
      icon: <FaLanguage className="text-2xl" />,
    },
    {
      linkName: "My lessons",
      icon: <MdOutlinePlayLesson className="text-2xl" />,
    },
    {
      linkName: "Statistics",
      icon: <FcStatistics className="text-2xl" />,
    },
    {
      linkName: "Shopping Cart",
      icon: <AiOutlineShoppingCart className="text-2xl" />,
    },
  ];

  return (
    <div className="flex-col space-y-24 pt-6 hidden md:flex w-72">
      <a href="#">
        <img src={logo} className="w-44 h-28" alt="logo" />
      </a>

      <ul className="flex flex-col space-y-3">
        {SideLinks.map((link) => (
          <li className="">
            <a href="#"  className="flex space-x-3 items-center hover:bg-gray-100 p-2">
            {link.icon}
            <span
              className={`${
                link.linkName === "Tutors" ? "font-bold" : ""
              } text-lg text-gray-800`}
            >
              {link.linkName}
            </span>
            </a>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
