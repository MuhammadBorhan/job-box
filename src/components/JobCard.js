import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ jobData }) => {
  const navigate = useNavigate();
  const { _id, position, companyName, location, employmentType } =
    jobData || {};
  return (
    <div className="border border-gray-300 shadow-xl p-5 rounded-2xl text-purple-700">
      <div className="flex justify-between  text-purple-700">
        <div>
          <p className="text-xl">{position}</p>
          <small className="text-purple-700/70 font-bold">
            by{" "}
            <span className="font-semibold hover:text-purple-700 cursor-pointer hover:underline transition-all">
              {companyName}
            </span>
          </small>
        </div>
        <p>{location}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p>{employmentType}</p>
        <button
          className="btn bg-purple-700 px-3 py-1 rounded-full text-white font-bold"
          onClick={() => navigate(`/job-details/${_id}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
