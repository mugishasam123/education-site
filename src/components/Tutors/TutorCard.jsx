import { SlUserFemale, SlUser } from "react-icons/sl";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TutorCard = ({ tutor }) => {
  return (
    <li className="space-y-16 border border-gray-500 rounded-lg px-4 py-2">
      <div className="flex items-center justify-between lg:space-x-44">
        <div className="flex space-x-3 items-center">
          {tutor.gender === "female" ? (
            <SlUserFemale className="text-4xl" />
          ) : (
            <SlUser className="text-4xl" />
          )}
          <div className="grid gap-2">
            <span>{tutor.name}</span>
            <span className="font-bold">{tutor.location}</span>
          </div>
        </div>

        {tutor.active ? (
          <div className="bg-green-500 rounded-full w-5 h-5"></div>
        ) : (
          <div className="bg-red-500 rounded-full w-5 h-5"></div>
        )}
      </div>
      <div className="flex items-center flex-row justify-between space-y-0 lg:space-y-0 md:space-y-8 md:flex-col lg:flex-row lg:justify-between">
        <button className="p-2  border border-gray-500 px-3 py-0 rounded-xl hover:bg-green-500 hover:text-white hover:border-none">
          {tutor.active ? "Call now" : "Schedule Call"}
        </button>
        <div className="space-y-3">
          <div className="font-bold border border-gray-500 px-2 py-1 rounded-xl">{`${tutor.teachings}+ Teachings`}</div>
          <div className="flex">
            {[...Array(tutor.rating).keys()].map((num) => (
              <AiFillStar key={num} />
            ))}
            {[...Array(5 - tutor.rating).keys()].map((num) => (
              <AiOutlineStar key={num} />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default TutorCard;
