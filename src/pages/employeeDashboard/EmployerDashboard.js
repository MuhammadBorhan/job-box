import React, { useEffect, useState } from "react";

const EmployerDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data?.data));
  }, []);

  const employer = users.filter((user) => user.role === "employer");
  const candidate = users.filter((user) => user.role === "candidate");
  return (
    <div className="grid md:grid-cols-2 gap-5 mt-5 p-4">
      {employer?.map((user) => {
        console.log(user);
        const { firstName, lastName, email, gender, roleInCompany } = user;
        return (
          <div className="border border-gray-300 shadow-xl p-5 rounded-2xl">
            <div className="flex justify-between">
              <div>
                <p className="text-xl">
                  <span className="font-bold">Name: </span>
                  {firstName} {lastName}
                </p>
                <p className="text-xl">
                  <span className="font-bold">Email: </span>
                  {email}
                </p>
                <p className="text-xl">
                  <span className="font-bold">Gender</span>:
                  <span className="capitalize">{gender}</span>
                </p>
                <p className="text-xl">
                  <span className="font-bold">Position</span>:{" "}
                  <span>{roleInCompany}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmployerDashboard;
