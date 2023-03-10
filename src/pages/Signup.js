import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsEye } from "react-icons/bs";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.svg";
import { createUser, googleLogin } from "../features/auth/authSlice";

const Signup = () => {
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });
  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const { email, isLoading, isError, error } = useSelector(
    (state) => state.auth
  );

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

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  const onSubmit = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));
    reset();
  };
  return (
    <div className="flex h-screen items-center pt-14">
      <div className="w-1/2 hidden lg:block">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className="w-1/2 mx-auto grid place-items-center">
        <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type={`${show.password ? "text" : "password"}`}
                  name="password"
                  id="password"
                  {...register("password")}
                />
                <span
                  onClick={() => setShow({ ...show, password: !show.password })}
                  className="cursor-pointer relative left-[180px] bottom-[30px]"
                >
                  {show.password ? <BsEye /> : <FaEyeSlash />}
                  {/* <BsEye /> */}
                </span>
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="confirm-password" className="ml-5">
                  Confirm Password
                </label>
                <input
                  type={show.confirmPassword ? "text" : "password"}
                  id="confirm-password"
                  {...register("confirmPassword")}
                />
                <span
                  onClick={() =>
                    setShow({
                      ...show,
                      confirmPassword: !show.confirmPassword,
                    })
                  }
                  className="cursor-pointer relative left-[180px] bottom-[30px]"
                >
                  {show.confirmPassword ? <BsEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="!mt-8 ">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-indigo-600 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={disabled}
                >
                  Sign up
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-purple-700 font-bold hover:underline cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>
              </div>
              <button
                onClick={() => dispatch(googleLogin())}
                type="button"
                className="font-bold flex items-center gap-2 justify-center text-white py-3 rounded-full bg-indigo-600 w-full"
              >
                Signin With Google
                <FaGoogle className="text-yellow-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
