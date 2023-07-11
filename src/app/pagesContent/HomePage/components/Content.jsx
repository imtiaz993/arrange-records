"use client";
import React, { useState } from "react";

const Content = ({ divRef }) => {
  const [examPlannerButton, setExamPlannerButtons] = useState(false);

  return (
    <div className="w-full bg-[#272727] p-4">
      <div
        style={{ background: 'url("/images/stats-background.png")' }}
        className="rounded-lg py-2.5 px-6 flex justify-between"
      >
        <div className="w-[55%] pr-8">
          <div>
            <div className="flex justify-between items-end">
              <p className="text-base text-white mb-1">
                Сourse grades targeted
              </p>
              <p className="text-xs text-[#F79E1C]">1500</p>
            </div>
            <div className="bg-[#2B2B2B] w-full rounded-full h-2">
              <div
                className={`progress-bar-gradient rounded-full h-2`}
                style={{ width: 22 + "%" }}
              ></div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between items-end">
              <p className="text-base text-white mb-1">Grades achieved</p>
              <p className="text-xs text-[#F79E1C]">900</p>
            </div>
            <div className="bg-[#2B2B2B] w-full rounded-full h-2">
              <div
                className={`progress-bar-gradient rounded-full h-2`}
                style={{ width: 13 + "%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-[80%] pl-[5%] border-l border-solid border-[#2B2B2B] border-opacity-60">
          <ul className="p-0">
            <li className="flex justify-between mb-1">
              <span className="flex items-center text-sm text-[#7E7E7E]">
                <span className="w-1 h-1 inline-block rounded-full bg-[#F79E1C] mr-2"></span>
                Past paperd solved
              </span>
              <span className="text-right text-sm text-[#F79E1C]">9/10</span>
            </li>
            <li className="flex justify-between">
              <span className="flex items-center text-sm text-[#7E7E7E]">
                <span className="w-1 h-1 inline-block rounded-full bg-[#F79E1C] mr-2"></span>
                Mock test completed
              </span>
              <span className="text-right text-sm text-[#F79E1C]">10/10</span>
            </li>
          </ul>
          <button className="mt-3 w-full rounded-md bg-[#303030] text-xs text-[#F79E1C] py-2 cursor-pointer">
            More Stats
          </button>
        </div>
      </div>
      <div className="mt-3" ref={divRef}>
        <div>
          <div className="grid grid-cols-3 gap-2 mr-2 -mb-[3.5%]">
            <div className="relative cursor-pointer">
              <img width="100%" height="85%" src="/images/revision.png" alt="" />
              <p className="text-white text-lg absolute bottom-[20%] left-5">
                Revision
              </p>
            </div>
            <div className="relative cursor-pointer">
              <img width="100%" height="85%" src="/images/mentor.png" alt="" />
              <p className="text-white text-lg absolute bottom-[20%] left-5">
                Mentor
              </p>
            </div>
            <div
              className="relative -mb-2"
              onMouseEnter={() => {
                setExamPlannerButtons(true);
              }}
              onMouseLeave={() => {
                setExamPlannerButtons(false);
              }}
            >
              <img width="104%" height="85%" src="/images/exam-planner.png" alt="" />
              <div
                className={`w-full flex justify-center ml-1.5 absolute bottom-[35%] ${
                  examPlannerButton
                    ? "opacity-100 transition-all duration-500"
                    : "opacity-0 transition-all duration-500"
                }`}
              >
                <button className="bg-[#1A1818] rounded-md w-2/5  h-8 text-white hover:text-[#F79E1C] text-xs cursor-pointer button-shadow">
                  Final Exam
                </button>
                <button className="bg-[#1A1818] rounded-md w-2/5 h-8 text-white hover:text-[#F79E1C] text-xs ml-3 cursor-pointer button-shadow">
                  My Plan
                </button>
              </div>
              <p className="text-white text-lg absolute bottom-[22%] left-6">
                Exam Planner
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 -mb-8">
            <div className="relative cursor-pointer">
              <img width="100%" height="85%" src="/images/past-papers.png" alt="" />
              <p className="text-white text-lg absolute bottom-[20%] left-4">
                Past Papers
              </p>
            </div>
            <div className="relative cursor-pointer">
              <img width="100%" height="85%" src="/images/mock-test.png" alt="" />
              <p className="text-white text-lg absolute bottom-[20%] left-4">
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
