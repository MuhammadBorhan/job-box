import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { logout } from "../../features/auth/authSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };
  return (
    <nav
      className={`h-14 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="max-w-7xl mx-auto flex gap-3 h-full items-center">
        <li className="flex-auto font-semibold text-2xl">
          <Link to="/">JobBox</Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>

        {email ? (
          <button onClick={handleSignOut} className="text-purple-700 font-bold">
            Logout
          </button>
        ) : (
          <li>
            <Link
              className="border border-black px-2 py-1 rounded-full hover:border-primary hover:outline-none hover:border-none hover:text-white hover:bg-indigo-500 hover:px-4 transition-all "
              to="/login"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
