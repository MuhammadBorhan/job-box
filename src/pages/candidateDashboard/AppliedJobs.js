import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import JobCard from "../../components/JobCard";
import { useGetAppliedJobsQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAppliedJobsQuery(email);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pl-5">
      <h1 className="text-xl py-5 text-purple-700 font-bold">Applied jobs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-5 px-4">
        {data?.data?.map((job) => (
          <JobCard key={job._id} jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
