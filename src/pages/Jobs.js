import React from "react";
import { Link, useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";
import { useGetJobsQuery } from "../features/job/jobApi";

const Jobs = () => {
  const { data } = useGetJobsQuery();
  return (
    <div className="pt-20 px-4">
      <div className="bg-purple-700/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-5 p-4 lg:p-0">
        {data?.data?.map((job) => (
          <JobCard key={job._id} jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
