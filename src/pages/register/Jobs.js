import React from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="pt-14">
      <h1>This is job page</h1>
      <div>
        <h1>THIS IS A JOB</h1>
        <button className="border">
          <Link to="/job-details">Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Jobs;
