import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlinePlayLesson, MdClose } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import logo from "../../assets/logo.png";

const SideNav = ({ isMenuOpen, setIsMenuOpen }) => {
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

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-72 ${
        isMenuOpen
          ? "fixed shadow-xl z-50 left-0 top-0 bottom-0 right-0 bg-gray-200 h-full"
          : "hidden"
      } flex-col space-y-24 p-6  md:flex `}
    >
      <div className="flex justify-between">
        <a href="#">
          <img src={logo} className="w-44 h-28" alt="logo" />
        </a>
        {isMenuOpen && <MdClose className="text-3xl" onClick={handleMenu} />}
      </div>

      <ul className="flex flex-col space-y-3">
        {SideLinks.map((link) => (
          <li key={link.linkName}>
            <a
              href="#"
              className="flex space-x-3 items-center hover:bg-gray-100 p-2"
            >
              {link.icon}
              <span
                className={`${
                  link.linkName === "Tutors" ? "font-bold" : ""
                } text-lg text-gray-900`}
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
