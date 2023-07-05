"use client";
import React, { useState } from "react";

const Content = () => {
  const [examPlannerButton, setExamPlannerButtons] = useState(false);

  return (
    <div className="w-full bg-[#272727] p-7">
      <div
        style={{ background: 'url("/images/stats-background.png")' }}
        className="rounded-lg py-4 px-6 flex justify-between"
      >
        <div className="w-1/2 pr-8">
          <div>
            <div className="flex justify-between items-end">
              <p className="text-base text-white mb-2">
                Сourse grades targeted
              </p>
              <p className="text-xs text-[#F79E1C]">1500</p>
            </div>
            <div className="bg-[#2B2B2B] w-full rounded-full h-2">
              <div
                className={`bg-[#F79E1B] rounded-full h-2`}
                style={{ width: 22 + "%" }}
              ></div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-end">
              <p className="text-base text-white mb-2">Grades achieved</p>
              <p className="text-xs text-[#F79E1C]">900</p>
            </div>
            <div className="bg-[#2B2B2B] w-full rounded-full h-2">
              <div
                className={`bg-[#F79E1B] rounded-full h-2`}
                style={{ width: 13 + "%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <ul className="p-0">
            <li className="flex justify-between mb-1">
              <span className="text-sm text-[#7E7E7E]">Past paperd solved</span>
              <span className="text-right text-sm text-[#F79E1C]">9/10</span>
            </li>
            <li className="flex justify-between">
              <span className="text-sm text-[#7E7E7E]">Mock test completed</span>
              <span className="text-right text-sm text-[#F79E1C]">10/10</span>
            </li>
          </ul>
          <button className="mt-5 w-full rounded-md bg-[#303030] text-xs text-[#F79E1C] py-2.5 cursor-pointer">
          More Stats
          </button>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <div className="grid grid-cols-3 gap-4 mb-1 mr-2">
            <div className="relative cursor-pointer">
              <img width="100%" src="/images/revision.png" alt="" />
              <p className="text-white text-lg absolute bottom-6 left-5">
                Revision
              </p>
            </div>
            <div className="relative cursor-pointer">
              <img width="100%" src="/images/mentor.png" alt="" />
              <p className="text-white text-lg absolute bottom-6 left-5">
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
              <p className="text-white text-lg absolute bottom-6 left-6">
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
