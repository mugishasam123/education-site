import { TbUserCircle } from "react-icons/tb";
import { MdOutlineArrowDropDown } from "react-icons/md";

const TopNav = () => {
  return (
    <div className="flex justify-end">
      <div className="flex items-center space-x-24">
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
