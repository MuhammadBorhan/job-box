import React from "react";
import { useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../features/job/jobApi";

const JobDetails = () => {
  const { id } = useParams();
  const { data } = useGetJobByIdQuery(id);
  const { position } = data?.data || {};
  return (
    <div className="pt-14">
      <h1>this is job details</h1>
      <button className="border">{position}</button>
    </div>
  );
};

export default JobDetails;
