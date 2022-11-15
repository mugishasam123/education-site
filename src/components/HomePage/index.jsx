import { useState } from "react";
import SideNav from "../SideNav";
import Search from "../Search";
import Tutors from "../Tutors";
import Footer from "../Footer";
import TopNav from "../TopNav";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${
        isMenuOpen ? "px-0" : ""
      } px-5 flex md:space-x-12 relative `}
    >
      <SideNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="hidden md:flex  w-[2px] bg-gray-500"></div>
      <div
        className={`${
          isMenuOpen ? "bg-gray-500 px-0" : ""
        } flex flex-col  space-y-20 py-6 w-full md:px-12`}
      >
        <TopNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="flex flex-col  space-y-10">
          <Search />
          <h2 className="font-bold text-lg">Online Tutors</h2>
          <Tutors />
          <h2 className="font-bold text-center">Load More</h2>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
