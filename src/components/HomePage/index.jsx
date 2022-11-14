import SideNav from "../SideNav";
import Search from "../Search";
import Tutors from "../Tutors";
import Footer from "../Footer";
import TopNav from "../TopNav";

const HomePage = () => {
  return (
    <div className="px-5 flex md:space-x-12">
      <SideNav />
      <div className="hidden md:flex  w-[2px] bg-gray-500"></div>
      <div className="flex flex-col  space-y-20 py-6 w-full md:px-12">
        <TopNav />
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
