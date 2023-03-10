import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import loginImage from "../assets/login.svg";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, loginUser } from "../features/auth/authSlice";
import { useEffect, useState } from "react";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { BsEye } from "react-icons/bs";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user: { email },
    isLoading,
    isError,
    error,
  } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
    reset();
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
    }
  }, [isLoading, email]);

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [isError, error]);
  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 hidden lg:block">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className="w-1/2 mx-auto grid place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input type="email" {...register("email")} id="email" />
              </div>
              <div className="flex flex-col items-start show-input">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type={toggle ? "text" : "password"}
                  id="password"
                  {...register("password")}
                />
                <span
                  onClick={() => setToggle(!toggle)}
                  className="cursor-pointer relative left-[180px] bottom-[30px]"
                >
                  {toggle ? <BsEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="relative !mt-8">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-indigo-600 w-full"
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
              <button
                onClick={() => dispatch(googleLogin())}
                type="button"
                className="font-bold flex items-center gap-2 justify-center text-white py-3 rounded-full bg-indigo-600 w-full"
              >
                Login With Google
                <FaGoogle className="text-yellow-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
