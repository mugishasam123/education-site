import SideNav from "../SideNav";
import Search from "../Search";
import Tutors from "../Tutors";
import Footer from "../Footer";
import TopNav from "../TopNav";

const HomePage = () => {
  return (
    <div className="px-5 flex space-x-8">
      <SideNav />
      <div className="flex space-x-44">
        <div className="h-[100%] w-1 bg-gray-500"></div>
        <div className="grid gap-20 py-6">
          <TopNav />
          <div className=" grid gap-7">
            <Search />
            <h2 className="font-bold text-lg">Online Tutors</h2>
            <Tutors />
            <h2 className="font-bold text-center">Load More</h2>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
