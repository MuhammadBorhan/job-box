import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    user: { email, role, firstName },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  const menuItems = (
    <>
      <li className=" text-white bg-blue-600 px-4 font-bold rounded-full hover:bg-blue-800 hover:text-white transition-all lg:mr-2">
        <Link to="/jobs">Jobs</Link>
      </li>
      {email && role && (
        <li className="border border-b-sky-600 text-indigo-500 font-bold rounded-full hover:border-b-white hover:text-white hover:bg-indigo-500 transition-all mr-2 my-2 md:my-0">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {email && !role && (
        <li className="border border-b-sky-600 text-indigo-500 font-bold rounded-full hover:border-b-white hover:text-white hover:bg-indigo-500 transition-all mr-2 my-2 md:my-0">
          <Link to="/register">Get Started</Link>
        </li>
      )}

      {email ? (
        <button
          onClick={handleSignOut}
          className="mb-2 md:mb-0 text-red-500 font-bold border-2 px-4 rounded-full hover:bg-yellow-500 hover:text-white transition-all mr-2"
        >
          Logout
        </button>
      ) : (
        <li className=" text-white my-2 lg:my-0 bg-blue-600 font-bold px-4 rounded-full hover:bg-blue-800 hover:text-white transition-all">
          <Link to="/login">Login</Link>
        </li>
      )}

      {role === "employer" ? (
        <li className="px-4 border border-b-purple-600  text-black font-bold rounded-full">
          <span>Employer</span>
        </li>
      ) : role === "candidate" ? (
        <li className="px-4 border border-b-purple-600  text-black font-bold rounded-full">
          <span>Candidate</span>
        </li>
      ) : (
        ""
      )}

      {email && !role && (
        <li className="px-4 border border-b-purple-600  text-black font-bold rounded-full">
          <span>User</span>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      {/* <nav
        className={`h-14 fixed w-full z-[999] ${
          pathname === "/" ? null : "bg-white"
        }`}
      >
        <ul className="max-w-7xl mx-auto flex gap-3 h-full items-center">
          <li className="flex-auto font-semibold text-3xl text-indigo-500 ">
            <Link to="/">JobBox</Link>
          </li>
          <li className="border border-b-white text-white bg-blue-600 font-bold px-2 py-1 rounded-full hover:outline-none hover:border-none hover:bg-blue-800 hover:text-white transition-all">
            <Link to="/jobs">Jobs</Link>
          </li>

          {email && role && (
            <li>
              <Link
                className="border border-b-sky-600 text-indigo-500 font-bold px-2 py-1 rounded-full hover:border-primary hover:outline-none hover:border-none hover:text-white hover:bg-indigo-500 transition-all "
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}
          {email && !role && (
            <li>
              <Link
                className="border border-b-sky-600 text-indigo-500 font-bold px-2 py-1 rounded-full hover:border-primary hover:outline-none hover:border-none hover:text-white hover:bg-indigo-500 transition-all "
                to="/register"
              >
                Get Started
              </Link>
            </li>
          )}

          {email ? (
            <button
              onClick={handleSignOut}
              className="border border-b-white text-red-500 bg-yellow-300 font-bold px-2 py-1 rounded-full   hover:bg-yellow-400 hover:text-red-500 transition-all"
            >
              Logout
            </button>
          ) : (
            <li className="border border-b-white text-white bg-blue-600 font-bold px-2 py-1 rounded-full hover:outline-none hover:border-none hover:bg-blue-800 hover:text-white transition-all">
              <Link to="/login">Login</Link>
            </li>
          )}

          {role === "employer" ? (
            <li className="px-2 py-1 border border-b-purple-600  text-black font-bold rounded-full">
              Employer
            </li>
          ) : role === "candidate" ? (
            <li className="px-2 py-1 bg-blue-600 text-white font-bold rounded-full">
              Candidate
            </li>
          ) : (
            ""
          )}

          {email && !role && (
            <li className="px-2 py-1 bg-blue-600 text-white font-bold rounded-full">
              User
            </li>
          )}
        </ul>
      </nav> */}

      <div className="navbar fixed w-full z-[999] px-12 bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          <Link
            to="/"
            className=" px-2 py-1 text-3xl font-bold rounded-full text-indigo-600"
          >
            JobBox
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal ">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
