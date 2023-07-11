import React from "react";

const Appbar = () => {
  return (
    <div className="bg-[#181818] pr-7 py-2 flex items-center justify-between">
      <div className="w-1/4 max-w-xs">
        <img
          className="ml-7 w-[183px] cursor-pointer"
          src="/images/logo.png"
          alt=""
        />
      </div>
      <div className="w-full flex justify-between">
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <p className="text-[#F79E1C] text-xs bg-[#272727] rounded-md py-2.5 px-4 mr-1 cursor-pointer">
              Home
            </p>
            <p className="text-[#7E7E7E] text-xs bg-[#272727] rounded-md py-2.5 px-4 mr-1 cursor-pointer">
              Information
            </p>
            <p className="text-[#7E7E7E] text-xs bg-[#272727] rounded-md py-2.5 px-4 mr-1 cursor-pointer">
              Book a tutor
            </p>
            <p className="text-[#7E7E7E] text-xs bg-[#272727] rounded-md py-2.5 px-4 mr-1 cursor-pointer">
              Сontact
            </p>
          </div>
          <div className="mr-4 px-2 min-w-[250px] flex items-center rounded-md border border-solid border-[#272727]">
            <input
              className="w-full bg-transparent text-[#7E7E7E] text-xs outline-none"
              placeholder="Search"
              type="text"
            />
            <img className="cursor-pointer" src="/icons/search.svg" alt="" />
          </div>
        </div>
        <div className="min-w-[310px] max-w-xs flex items-center">
          <div className="relative w-1/2 flex items-center bg-[#272727] rounded-md px-3 py-2 mr-4 cursor-pointer">
            <div className="flex items-center">
              <img width="25px" src="/icons/wallet.svg" alt="" />
              <p className="text-white text-xs font-medium ml-3 mt-1">$245,13</p>
            </div>
            <img
              className="ml-auto rotate-90"
              src="/icons/right-chevron.svg"
              width="10px"
              alt=""
            />
            {/* <div className="w-full absolute left-0 top-9 py-1 bg-[#272727] shadow-lg text-white">
              <p className="px-4 py-2 hover:bg-[#F79E1C]">Option 1</p>
              <p className="px-4 py-2 hover:bg-[#F79E1C]">Option 1</p>
            </div> */}
          </div>
          <div className="w-1/2  bg-[#272727] flex justify-center rounded-md px-3 py-[10px] cursor-pointer">
            <p className="text-[#F79E1C] text-sm">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
