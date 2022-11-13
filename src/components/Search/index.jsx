import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex justify-between h-fit items-center border-2 border-gray-500 w-fit px-2 py-1 rounded-lg shadow">
      <input
        type="text"
        placeholder="Search Tutor"
        className="focus:outline-none"
      />
      <HiOutlineSearch className="text-2xl" />
    </div>
  );
};
export default Search;
