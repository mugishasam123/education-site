import tutors from "../../data/tutors.json";
import TutorCard from "./TutorCard";

const Tutors = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
      {tutors.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </ul>
  );
};

export default Tutors;
