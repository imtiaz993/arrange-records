import React from "react";

const Appbar = () => {
  return (
    <div className="bg-[#181818] pl-7 pr-5 py-3 flex items-center justify-between shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.25)]">
      <div className="flex items-center">
        <div className="">
          <img
            className="w-[183px] cursor-pointer"
            src="/images/logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center ml-10">
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
      </div>
      <div className="flex items-center">
        <div className="min-w-[250px] flex items-center rounded-md border border-[#272727]">
          <input
            className="w-full bg-transparent text-[#7E7E7E] text-xs border-none outline-none"
            placeholder="Search"
            type="text"
          />
          <img className="cursor-pointer" src="/icons/search.svg" alt="" />
        </div>
        <div className="min-w-[146px] flex items-center bg-[#272727] rounded-md px-2.5 py-2 ml-8 mr-4 cursor-pointer">
          <div className="flex  items-center">
            <img width="25px" src="/icons/wallet.svg" alt="" />
            <p className="text-white text-sx font-medium ml-3">$245,13</p>
          </div>
          <img src="" alt="" />
        </div>
        <div className="min-w-[134px] bg-[#272727] flex justify-center rounded-md px-2.5 py-2 cursor-pointer">
          <p className="text-[#F79E1C] text-sm">Explore</p>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
