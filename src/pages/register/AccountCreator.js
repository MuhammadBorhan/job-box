import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import candidate from "../../assets/candidate.svg";
import employer from "../../assets/employer.svg";
import CandidateRegistration from "./CandidateRegistration";
import EmployerRegistration from "./EmployerRegistration";

const AccountCreator = () => {
  const navigate = useNavigate();

  const { type } = useParams();

  if (type === "candidate") {
    return <CandidateRegistration />;
  }

  if (type === "employer") {
    return <EmployerRegistration />;
  }
  return (
    <div className=" pt-14">
      <h1 className="text-center my-10 text-2xl">Continue as ...</h1>
      <div className="flex flex-col lg:flex-row justify-evenly gap-y-10 lg:gap-y-0 p-8 lg:p-0">
        <div
          onClick={() => navigate("/register/candidate")}
          className="flex flex-col justify-between transition-all rounded-lg p-2 border border-white hover:border-purple-700 hover:shadow-2xl hover:scale-105 group cursor-pointer"
        >
          <img className="h-48 lg:h-5/6" src={candidate} alt="" />
          <p className="text-center text-3xl lg:mt-[-150px]">Candidate</p>
        </div>
        <div
          onClick={() => navigate("/register/employer")}
          className="flex flex-col justify-between transition-all rounded-lg p-2 border border-white hover:border-purple-700 hover:shadow-2xl hover:scale-105 group cursor-pointer"
        >
          <img className="h-48 lg:h-[77%]" src={employer} alt="" />
          <p className="text-center text-3xl lg:mt-[-150px]">Employer</p>
        </div>
      </div>
    </div>
  );
};

export default AccountCreator;
