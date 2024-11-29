import { IoLocationOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Button } from "./ui/button";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="flex flex-col w-96 h-80 p-4 border border-transparent rounded-lg shadow-lg hover:bg-accent hover:cursor-default hover:scale-[1.01]">
      <div className="mb-3">
        <h1 className="font-extrabold mb-4 text-xl">{job.roleName}</h1>
        <p className="flex justify-between mt-4 mb-4">
          <img
            src={job.logoPath}
            alt="company logo"
            className="w-20 h-10 object-fill"
          />
          <div className="flex justify-around items-center">
            <IoLocationOutline size={"12px"} className="mr-0" /> {/* Location icon */}
            <p className="text-xs font-semibold ml-1">{job.location}</p>
          </div>
        </p>

        <p className="font-light overflow-hidden text-ellipsis line-clamp-6 text-justify font-sans">
          {job.jobDescription}
        </p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <Link to={`/job/${job.jobId}`} className="inline-block w-full">
          <Button variant="destructive" className="mb-0 w-[85%]">
            More details
          </Button>
        </Link>
        <button title="wishlist">
          <CiHeart size={"24px"} className="align-middle" />
        </button>
      </div>
    </div>
  );
}
JobCard.propTypes = {
  job: PropTypes.shape({
    roleName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    logoPath: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    jobId:PropTypes.number.isRequired
  }).isRequired,
};

export default JobCard;
