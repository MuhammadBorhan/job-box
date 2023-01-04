import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-purple-700/10 col-span-2 h-screen sticky top-0">
      <ul className="flex flex-col gap-2 w-full h-full  p-3">
        <div className="flex justify-between items-center text-primary my-1">
          <Link to="/" className="flex items-center">
            <FaChevronLeft />
            <h1>Back</h1>
          </Link>
          <h1 className="text-xl">Dashboard</h1>
        </div>
        <li>
          <Link
            className="hover:bg-purple-700 hover:text-white bg-purple-700/20 transition-all w-full block py-2 px-3 rounded-full"
            to="add-job"
          >
            Add Job
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-purple-700 hover:text-white bg-purple-700/20 transition-all w-full block py-2 px-3 rounded-full"
            to="employer"
          >
            EmployerDashboard
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-purple-700 hover:text-white bg-purple-700/20 transition-all w-full block py-2 px-3 rounded-full"
            to="candidate"
          >
            CandidateDashboard
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
