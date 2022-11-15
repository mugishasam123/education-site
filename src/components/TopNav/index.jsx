import { TbUserCircle } from "react-icons/tb";
import { MdOutlineArrowDropDown, MdMenu } from "react-icons/md";

const TopNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex md:justify-end ">
      <div className="flex items-center w-full justify-between md:w-fit md:space-x-24">
        <MdMenu className="text-4xl flex md:hidden" onClick={handleMenu} />
        <div className="flex space-x-1 items-center">
          <img
            src="https://countryflagsapi.com/png/in"
            className="w-12 rounded-md h-7"
            alt="flag"
          />
          <MdOutlineArrowDropDown className="text-xl" />
        </div>
        <TbUserCircle className="text-5xl" />
      </div>
    </div>
  );
};

export default TopNav;
