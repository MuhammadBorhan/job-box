import React from "react";
import { useGetAllApplyQuery } from "../../features/job/jobApi";

const AppliedCandidate = () => {
  const { data } = useGetAllApplyQuery();
  const result = data?.data;
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {result?.map((item) => {
          const { name, jobName, email, resume } = item;
          return (
            <div className="border border-gray-200 shadow-xl p-5 rounded-2xl text-purple-600 text-xl">
              <h3>
                <span className="font-bold ">Name:</span> {name}
              </h3>
              <p>
                <span className="font-bold ">Email:</span> {email}
              </p>
              <p>
                <span className="font-bold ">Job-position:</span> {jobName}
              </p>
              <a
                target="_blank"
                href={resume}
                className="border-2 border-sky-400 text-indigo-600 font-bold rounded-full px-2 py-1 mt-2 inline-block"
              >
                {resume ? "Resume" : "Resume not available"}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppliedCandidate;
