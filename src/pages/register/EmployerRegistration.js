import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../features/auth/authApi";

const EmployerRegistration = () => {
  const [postUser] = useRegisterMutation();
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const { handleSubmit, register, control, reset } = useForm({
    defaultValues: { email },
  });
  const term = useWatch({ control, name: "term" });
  const navigate = useNavigate();

  const businessCategory = [
    "Automotive",
    "Business Support & Supplies",
    "Computers & Electronics",
    "Construction & Contractors",
    "Design Agency",
    "Education",
    "Entertainment",
    "Food & Dining",
    "Health & Medicine",
    "Home & Garden",
    "IT Farm",
    "Legal & Financial",
    "Manufacturing, Wholesale, Distribution",
    "Merchants (Retail)",
    "Miscellaneous",
    "Personal Care & Services",
    "Real Estate",
    "Travel & Transportation",
  ];

  const employeeRange = ["1 - 10", "11 - 50", "51 - 100", "Above 100"];

  const onSubmit = (data) => {
    console.log(data);
    postUser({ ...data, role: "employer" });
    reset();
    navigate("/");
  };
  return (
    <div className="pt-14">
      <div
        onClick={() => navigate("/register")}
        className="cursor-pointer w-fit mt-5 flex items-center fixed text-red-500 font-bold text-xl"
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <div className="flex justify-center items-center overflow-auto p-10 mt-10 lg:mt-0">
        <form
          className="bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full text-2xl text-primary mb-5">Employer</h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              First Name
            </label>
            <input type="text" id="firstName" {...register("firstName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input type="text" id="lastName" {...register("lastName")} />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              disabled
              className="cursor-not-allowed"
              type="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <h1 className="mb-3">Gender</h1>
            <div className="flex gap-3">
              <div>
                <input
                  type="radio"
                  id="male"
                  {...register("gender")}
                  value="male"
                />
                <label className="ml-2 text-lg" for="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  {...register("gender")}
                  value="female"
                />
                <label className="ml-2 text-lg" for="female">
                  Female
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  {...register("gender")}
                  value="other"
                />
                <label className="ml-2 text-lg" for="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className="w-full mt-2 bg-black" />
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="companyName">
              Company's name
            </label>
            <input type="text" {...register("companyName")} id="companyName" />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" for="employeeRange">
              Number of employee
            </label>
            <select {...register("employeeRange")} id="employeeRange">
              {employeeRange
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <option value={category}>{category}</option>
                ))}
            </select>
          </div>

          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" for="companyCategory">
              Company's Category
            </label>
            <select {...register("companyCategory")} id="companyCategory">
              {businessCategory
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <option value={category}>{category}</option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="roleInCompany">
              Your role in company
            </label>
            <input
              type="text"
              {...register("roleInCompany")}
              id="roleInCompany"
            />
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="flex items-center w-full max-w-xs text-blue-600 font-bold">
              <input
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label for="terms" className="cursor-pointer">
                I agree to terms and conditions
              </label>
            </div>
            <button
              title={`${term ? "" : "Click the agree button"}`}
              disabled={!term}
              className={`btn border-2  px-2 py-1 ${
                term
                  ? "border-2 border-sky-600 bg-blue-600 text-white font-bold rounded-sm"
                  : "cursor-not-allowed"
              }`}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerRegistration;
