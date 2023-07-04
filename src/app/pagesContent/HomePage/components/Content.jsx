import React from "react";

const Content = () => {
  return (
    <div className="bg-[#272727] p-7">
      <div></div>
      <div>
        <div>
          <div className="grid grid-cols-3 gap-4 mr-2">
            <div className="relative cursor-pointer">
              <img width="100%" src="/images/revision.png" alt="" />
              <p className="text-white text-lg absolute bottom-8 left-4">
                Revision
              </p>
            </div>
            <div className="relative cursor-pointer">
              <img width="100%" src="/images/mentor.png" alt="" />
              <p className="text-white text-lg absolute bottom-8 left-4">
                Mentor
              </p>
            </div>
            <div className="relative cursor-pointer">
              <img width="104%" src="/images/exam-planner.png" alt="" />
              <p className="text-white text-lg absolute bottom-8 left-5">
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
