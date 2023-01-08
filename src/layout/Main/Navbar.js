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
  return (
    <nav
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
            New User
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
