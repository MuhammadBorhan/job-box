import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import "./Modal.css";

const Modal = () => {
  const { handleSubmit, register, control } = useForm();
  const term = useWatch({ control, name: "term" });
  const onSubmit = (data) => {
    console.log(data);
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Apply
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="flex justify-center items-center overflow-auto p-10">
              <form
                className="bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h1 className="w-full text-2xl text-primary mb-5">Candidate</h1>
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                  />
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
                  <input type="email" id="email" {...register("email")} />
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
                  <label className="mb-2" htmlFor="address">
                    Street Address
                  </label>
                  <input type="text" {...register("address")} id="address" />
                </div>
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-2" htmlFor="city">
                    City
                  </label>
                  <input type="text" {...register("city")} id="city" />
                </div>
                <div className="flex flex-col w-full max-w-xs">
                  <label className="mb-2" htmlFor="postcode">
                    Postal Code
                  </label>
                  <input type="text" {...register("postcode")} id="postcode" />
                </div>

                <div className="flex justify-between items-center w-full mt-3">
                  <div className="flex items-center w-full max-w-xs text-blue-600 font-bold">
                    <input
                      className="mr-3 "
                      type="checkbox"
                      {...register("term")}
                      id="terms"
                    />
                    <label for="terms" className="cursor-pointer ">
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

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
