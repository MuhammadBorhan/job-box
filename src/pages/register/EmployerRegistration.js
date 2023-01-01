import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmployerRegistration = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-14">
      <div
        onClick={() => navigate("/register")}
        className="cursor-pointer w-fit mt-5 flex items-center"
      >
        <FaChevronLeft />
        <p>back</p>
      </div>
      <h1>This is employer registration</h1>
    </div>
  );
};

export default EmployerRegistration;
