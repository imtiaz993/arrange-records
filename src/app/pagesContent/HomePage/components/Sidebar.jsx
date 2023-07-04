import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#181818] w-1/5 flex flex-col justify-between min-h-screen">
      <div>
        <div className="flex items-center px-4 py-5 ml-5 rounded-md cursor-pointer">
          <img src="/icons/advance-math.svg" alt="" />
          <p className="ml-2.5 text-[#7E7E7E] text-base">Advanced Maths</p>
        </div>
        <div className="flex items-center px-4 py-5 ml-5 rounded-md cursor-pointer bg-[#F79E1B]">
          <img src="/icons/math-methods.svg" alt="" />
          <p className="ml-2.5 text-black text-base">Mathematical Methods</p>
        </div>
        <div className="flex items-center px-4 py-5 ml-5 rounded-md cursor-pointer">
          <img src="/icons/english.svg" alt="" />
          <p className="ml-2.5 text-[#7E7E7E] text-base">English</p>
        </div>
      </div>
      <div>
        <div className="rounded-md bg-[#303030] mx-3 p-2 flex justify-between">
          <input
            type="text"
            placeholder="Add Subject"
            className="text-base text-[#F79E1C] placeholder:text-[#F79E1C] w-full border-none outline-none pl-4 pr-1 bg-transparent"
          />
          <div className="rounded-md bg-[#F79E1C] flex justify-center p-2 cursor-pointer">
            <img src="/icons/plus.svg" alt="" />
          </div>
        </div>
        <div className="mx-3 p-1 mt-4 mb-8">
          <div className="bg-[#393838] opacity-40 rounded-xl w-full h-[1px]"></div>
        </div>
        <div className="mx-5 my-8">
          <div className="relative flex justify-center">
            <img src="/icons/quote.svg" alt="" />
            <div className="absolute right-0">
              <img
                className="cursor-pointer"
                width="25px"
                src="/icons/close.svg"
                alt=""
              />
            </div>
          </div>
          <p className="text-white text-sm text-center">
            It is not that I'm so smart. But I stay with the questions much
            longer.
          </p>
          <div className="flex justify-center my-2">
            <img src="/images/user.png" alt="" />
          </div>
          <p className="text-white text-sm font-light text-center">
            Albert Einstein
          </p>
          <p className="text-[#7B7C80] text-xs text-center">
            Theoretical physicist
          </p>
          <div className="w-20 rounded-[1px] bg-[#F79E1B] h-[1px] mx-auto mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
