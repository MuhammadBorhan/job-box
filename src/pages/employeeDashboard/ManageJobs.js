import React from "react";
import { toast } from "react-hot-toast";
import {
  useGetJobsQuery,
  useRemoveJobsMutation,
} from "../../features/job/jobApi";

const ManageJobs = () => {
  const { data } = useGetJobsQuery();
  const [removeJob] = useRemoveJobsMutation();

  const handleDelete = (id) => {
    removeJob(id);
    toast.success("Remove Successfully Done...");
  };
  return (
    <div className="p-4">
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        {data?.data?.map((job) => {
          const { _id, position, companyName, location, employmentType } =
            job || {};
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
                  onClick={() => handleDelete(_id)}
                  className="border-2 border-red-600 text-red-600 font-bold px-2 py-1 rounded-full"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageJobs;
