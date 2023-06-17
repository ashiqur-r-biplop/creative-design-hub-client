import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useTitle from "../../../Hook/UseTitle";

const Instructor = () => {
  useTitle("All Instructor");
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://creativa-design-hub-server-site.vercel.app/allInstructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  // console.log(instructors);
  return (
    <div className="mb-10">
      <div className="container mx-auto">
      <h2 className="text-4xl font-semibold text-center py-5 "></h2>
        <h1 className="section-title">
          Our <span className="text-[#267E23]">instructor</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors.map((instructor) => (
            <div
              key={instructor?._id}
              className="card md:w-96 mx-3 bg-base-100 shadow-xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={instructor?.photo}
                  alt="Shoes"
                  className="rounded-xl w-full h-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{instructor?.name}</h2>
                <p className="bg-[#1dcdbc] text-white px-2 py-1 rounded-lg">
                  {instructor?.role}
                </p>
                <p>{instructor?.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
