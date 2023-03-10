import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Main/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import CandidateDashboard from "../pages/candidateDashboard/CandidateDashboard";
import AddJob from "../pages/employeeDashboard/AddJob";
import EmployerDashboard from "../pages/employeeDashboard/EmployerDashboard";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import AccountCreator from "../pages/register/AccountCreator";
import Signup from "../pages/Signup";
import PrivateRoute from "../utils/PrivateRoute";
import AppliedJobs from "../pages/candidateDashboard/AppliedJobs";
import AppliedCandidate from "../pages/candidateDashboard/AppliedCandidate";
import ManageJobs from "../pages/employeeDashboard/ManageJobs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-job",
        element: <AddJob />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        // path: "employer",
        index: true,
        element: <EmployerDashboard />,
      },
      {
        path: "candidate",
        element: <CandidateDashboard />,
      },
      {
        path: "applied-candidate",
        element: <AppliedCandidate />,
      },
      {
        path: "manage-jobs",
        element: <ManageJobs />,
      },
    ],
  },
]);

export default routes;
