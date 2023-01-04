import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetJobsQuery();
  return (
    <div className="pt-14">
      <div>
        {data?.data?.map((job) => {
          const { position, companyName, _id } = job;
          return (
            <div>
              <h1>{position}</h1>
              <h1>{companyName}</h1>
              <button className="border">
                <Link to={`/job-details/${_id}`}>Details</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
