import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/register/JobDetails";
import Jobs from "../pages/register/Jobs";
import Login from "../pages/register/Login";
import Signup from "../pages/register/Signup";

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
        path: "/job-details",
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
    ],
  },
]);

export default routes;
