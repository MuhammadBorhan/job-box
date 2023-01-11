import React from "react";
import { useGetNewDataQuery } from "../../features/job/jobApi";

const AppliedCandidate = () => {
  const { data } = useGetNewDataQuery();
  console.log(data.data);
  return (
    <div>
      <div>
        {data?.data?.map((item) => {
          const { name, jobName, email } = item;
          return (
            <div>
              <h3>Name: {name}</h3>
              <p>Email: {email}</p>
              <p>Job-name: {jobName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppliedCandidate;
