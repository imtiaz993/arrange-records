"use client";
import React, { useState } from "react";

const Content = () => {
  const [examPlannerButton, setExamPlannerButtons] = useState(false);

  return (
    <div className="w-full bg-[#272727] p-7">
      <div></div>
      <div>
        <div>
          <div className="grid grid-cols-3 gap-4 mr-2">
            <div className="relative cursor-pointer">
              <img width="100%" src="/images/revision.png" alt="" />
              <p className="text-white text-lg absolute bottom-8 left-5">
                Revision
              </p>
            </div>
            <div className="relative cursor-pointer">
              <img width="100%" src="/images/mentor.png" alt="" />
              <p className="text-white text-lg absolute bottom-8 left-5">
                Mentor
              </p>
            </div>
            <div
              className="relative"
              onMouseEnter={() => {
                setExamPlannerButtons(true);
              }}
              onMouseLeave={() => {
                setExamPlannerButtons(false);
              }}
            >
              <img width="104%" src="/images/exam-planner.png" alt="" />
              <div
                className={`w-full flex justify-center ml-1.5 absolute bottom-[25%] ${
                  examPlannerButton
                    ? "opacity-100 transition-all duration-500"
                    : "opacity-0 transition-all duration-500"
                }`}
              >
                <button className="bg-[#1A1818] rounded-md w-2/5  h-10 text-white text-xs cursor-pointer">
                  Final Exam
                </button>
                <button className="bg-[#1A1818] rounded-md w-2/5 h-10 text-[#F79E1C] text-xs ml-3 cursor-pointer">
                  My Plan
                </button>
              </div>
              <p className="text-white text-lg absolute bottom-8 left-6">
                Exam Planner
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative cursor-pointer">
              <img width="100%" src="/images/past-papers.png" alt="" />
              <p className="text-white text-lg absolute bottom-4 left-4">
                Past Papers
              </p>
            </div>
            <div className="relative cursor-pointer">
              <img width="100%" src="/images/mock-test.png" alt="" />
              <p className="text-white text-lg absolute bottom-4 left-4">
                Mock Tests
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
