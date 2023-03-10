import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useApplyMutation,
  useGetJobByIdQuery,
  useNewDataMutation,
  usePostApplyMutation,
  useQuestionMutation,
  useReplyMutation,
} from "../features/job/jobApi";
import borhan from "../assets/hero-01.jpg";
import reactDev from "../assets/reactDev.webp";
import frontDev from "../assets/frontDev.webp";
import backEnd from "../assets/nodeDev.jpg";
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const JobDetails = () => {
  const [resume, setResume] = useState("");
  const [letter, setLetter] = useState("");
  const [reply, setReply] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { data } = useGetJobByIdQuery(id, {
    pollingInterval: 1000,
  });

  const navigate = useNavigate();
  const {
    queries,
    applicants,
    position,
    overview,
    skills,
    requirements,
    responsibilities,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    companyName,
    _id,
    location,
  } = data?.data || {};

  const [apply] = useApplyMutation();
  const [postApply] = usePostApplyMutation();
  const [sendQuestion] = useQuestionMutation();
  const [sendReply] = useReplyMutation();

  const handleApply = () => {
    if (user.role === "employer") {
      toast.error("You need a candidate account to apply");
      return;
    }
    if (user.role === "") {
      navigate("/register");
      return;
    }

    const data = {
      userId: user._id,
      email: user.email,
      jobId: _id,
    };
    apply(data);
    postApply({
      ...data,
      jobName: position,
      resume: resume,
      letter: letter,
      name: user.firstName + " " + user.lastName,
    });
    toast.success("Apply successfully done..");
  };

  const handleQuestion = (data) => {
    const quesData = {
      ...data,
      userId: user._id,
      email: user.email,
      jobId: _id,
    };
    sendQuestion(quesData);
    reset();
  };

  const handleReply = (id) => {
    const data = {
      reply,
      userId: id,
      jobId: _id,
    };
    sendReply(data);
  };

  return (
    <div className="pt-20 grid grid-cols-1 lg:grid-cols-12 gap-5 px-5 lg:px-0">
      <div className="col-span-9 mb-10">
        <div className="h-96 rounded-xl overflow-hidden">
          <img
            className=" w-full object-cover"
            src={
              position === "React Developer"
                ? reactDev
                : position === "Frontend Developer"
                ? frontDev
                : position === "Backend Developer"
                ? backEnd
                : borhan
            }
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-xl font-semibold text-purple-700">
              {position}
            </h1>

            {/* <Modal /> */}
            <div>
              {/* The button to open modal */}
              <label
                htmlFor="my-modal-6"
                className="border-2 border-purple-600 px-2 py-1 rounded-full font-bold hover:bg-purple-600 hover:text-white text-purple-600 cursor-pointer transition-all"
              >
                Easy Apply
              </label>
              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle px-2">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-6"
                    className="text-red-600 font-bold px-2 py-1 rounded-full border-red-600 border-2 cursor-pointer absolute right-2 top-2 bg"
                  >
                    Cancel
                  </label>
                  <div>
                    <div>
                      <h1 className="text-xl font-bold my-2 text-indigo-600">
                        Cover letter
                      </h1>
                      <p className="font-bold mb-2 text-indigo-500">
                        Why should you be hired for this role?
                      </p>
                      <textarea
                        className="w-full"
                        rows={4}
                        onChange={(e) => setLetter(e.target.value)}
                      />
                    </div>

                    <div className="my-8">
                      <h1 className="font-bold text-indigo-600 mb-2 font-serif">
                        Add your resume link here: ( must be google drive viewer
                        link)
                      </h1>
                      <input
                        type="text"
                        onChange={(e) => setResume(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <button
                      disabled={!resume}
                      onClick={handleApply}
                      className="border-2 border-purple-600 px-2 py-1 rounded-full font-bold hover:bg-purple-600 hover:text-white text-purple-600 cursor-pointer transition-all"
                    >
                      {user.role === "employer" ? (
                        <h1>You can't apply because you are an employer</h1>
                      ) : user.role === "candidate" &&
                        applicants?.find((item) => item.id === user._id) ? (
                        <h1>Already Applied</h1>
                      ) : (
                        <h1>Apply</h1>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-purple-700 text-lg font-medium mb-3">
              Overview
            </h1>
            <p>{overview}</p>
          </div>
          <div>
            <h1 className="text-purple-700 text-lg font-medium mb-3">Skills</h1>
            <ul>
              {skills?.map((skill) => (
                <li className="flex items-center">
                  <BsArrowRightShort /> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-purple-700  text-lg font-medium mb-3">
              Requirements
            </h1>
            <ul>
              {requirements?.map((skill) => (
                <li className="flex items-center">
                  <BsArrowRightShort /> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-purple-700  text-lg font-medium mb-3">
              Responsibilities
            </h1>
            <ul>
              {responsibilities?.map((skill) => (
                <li className="flex items-center">
                  <BsArrowRightShort /> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <div>
            <h1 className="text-xl font-semibold text-purple-700  mb-5">
              General Q&A
            </h1>
            <div className="text-primary my-2">
              {queries?.map(({ question, email, reply, id }) => (
                <div>
                  <small>{email}</small>
                  <p className="text-lg font-medium">{question}</p>
                  {reply?.map((item) => (
                    <p className="flex items-center gap-2 relative left-5">
                      <BsArrowReturnRight /> {item}
                    </p>
                  ))}

                  {user.role === "employer" && (
                    <div className="flex gap-3 my-5">
                      <input
                        placeholder="Reply"
                        type="text"
                        className="w-full"
                        onBlur={(e) => setReply(e.target.value)}
                      />
                      <button
                        className="shrink-0 h-14 w-14 bg-purple/10 border border-purple-700 hover:bg-purple-700 rounded-full transition-all  grid place-items-center text-purple-700 hover:text-white"
                        type="button"
                        onClick={() => handleReply(id)}
                      >
                        <BsArrowRightShort size={30} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {user.role === "candidate" && (
              <form onSubmit={handleSubmit(handleQuestion)}>
                <div className="flex gap-3 my-5">
                  <input
                    placeholder="Ask a question..."
                    type="text"
                    className="w-full"
                    {...register("question")}
                  />
                  <button
                    className="shrink-0 h-14 w-14 bg-purple-700/10 border border-purple-700 hover:bg-purple-700 rounded-full transition-all  grid place-items-center text-purple-700  hover:text-white"
                    type="submit"
                  >
                    <BsArrowRightShort size={30} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded-xl bg-purple-700/10 p-5 w-96 lg:w-full text-purple-700  space-y-5">
          <div>
            <p>Experience</p>
            <h1 className="font-semibold text-lg">{experience}</h1>
          </div>
          <div>
            <p>Work Level</p>
            <h1 className="font-semibold text-lg">{workLevel}</h1>
          </div>
          <div>
            <p>Employment Type</p>
            <h1 className="font-semibold text-lg">{employmentType}</h1>
          </div>
          <div>
            <p>Salary Range</p>
            <h1 className="font-semibold text-lg">{salaryRange}</h1>
          </div>
          <div>
            <p>Location</p>
            <h1 className="font-semibold text-lg">{location}</h1>
          </div>
        </div>
        <div className="mt-5 rounded-xl w-96 lg:w-full bg-purple-700/10 p-5 text-purple-700  space-y-5">
          <div>
            <h1 className="font-semibold text-lg">{companyName}</h1>
          </div>
          <div>
            <p>Company Size</p>
            <h1 className="font-semibold text-lg">Above 100</h1>
          </div>
          <div>
            <p>Founded</p>
            <h1 className="font-semibold text-lg">2001</h1>
          </div>
          <div>
            <p>Email</p>
            <h1 className="font-semibold text-lg">borhan@bohubrihi.com</h1>
          </div>
          <div>
            <p>Company Location</p>
            <h1 className="font-semibold text-lg">Badda, Dhaka</h1>
          </div>
          <div>
            <p>Website</p>
            <a
              className="font-semibold text-lg"
              href=" https://glowing-semifreddo-77c56f.netlify.app/"
            >
              https://borhanbd.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
