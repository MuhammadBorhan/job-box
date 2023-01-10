import React from "react";
import { useGetJobsQuery } from "../../features/job/jobApi";

const AppliedCandidate = () => {
  const { data } = useGetJobsQuery();
  const allData = data?.data?.map((applicants) => applicants);
  const applicants = allData?.map((item) => item.applicants);
  return (
    <div>
      {applicants?.map((item) => {
        const email = item?.find((data) => data);
        return <div>{email.email}</div>;
      })}
    </div>
  );
};

export default AppliedCandidate;
