"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Mathematical Methods");
  const [showQuote, setShowQuote] = useState(true);

  return (
    <div className="bg-[#181818] w-1/4 max-w-xs h-[calc(100vh-90px)] flex flex-col justify-between pb-4 mt-5">
      <div className="h-[60%] border-r border-solid border-gradient mt-4">
        <div
          className={`relative flex items-center px-4 mt-2 py-2.5 ml-5 rounded-l-md cursor-pointer ${
            activeTab === "Advanced Maths"
              ? "active-tab-gradient"
              : "text-[#7E7E7E]"
          }`}
          onClick={() => {
            setActiveTab("Advanced Maths");
          }}
        >
          <img
            src={
              activeTab === "Advanced Maths"
                ? "/icons/active-advance-math.svg"
                : "/icons/advance-math.svg"
            }
            alt=""
          />
          <p className="ml-2.5 text-base">Advanced Maths</p>
          {activeTab === "Advanced Maths" && (
            <img
              className="absolute -right-1"
              src="/images/active.png"
              alt=""
            />
          )}
        </div>
        <div
          className={`relative flex items-center px-2 py-2.5 ml-5 rounded-l-md cursor-pointer ${
            activeTab === "Mathematical Methods"
              ? "active-tab-gradient"
              : "text-[#7E7E7E]"
          }`}
          onClick={() => {
            setActiveTab("Mathematical Methods");
          }}
        >
          <img
            src={
              activeTab === "Mathematical Methods"
                ? "/icons/active-math-methods.svg"
                : "/icons/math-methods.svg"
            }
            alt=""
          />
          <p className="ml-2.5 text-base">Mathematical Methods</p>
          {activeTab === "Mathematical Methods" && (
            <img
              className="absolute -right-1"
              src="/images/active.png"
              alt=""
            />
          )}
        </div>
        <div
          className={`relative flex items-center px-2 py-2.5 ml-5 rounded-l-md cursor-pointer ${
            activeTab === "English" ? "active-tab-gradient" : "text-[#7E7E7E]"
          }`}
          onClick={() => {
            setActiveTab("English");
          }}
        >
          <img
            src={
              activeTab === "English"
                ? "/icons/active-english.svg"
                : "/icons/english.svg"
            }
            alt=""
          />
          <p className="ml-2.5 text-base">English</p>
          {activeTab === "English" && (
            <img
              className="absolute -right-1"
              src="/images/active.png"
              alt=""
            />
          )}
        </div>
      </div>
      <div>
        <div className="flex items-center rounded-md bg-[#303030] mx-3 py-1 px-2 justify-between cursor-pointer">
          <p className="text-base text-[#F79E1C] w-full pl-4 pr-1 bg-transparent">
            Add Subject
          </p>
          <div className="rounded-md bg-[#F79E1C] flex justify-center p-2">
            <img src="/icons/plus.svg" alt="" />
          </div>
        </div>
        {showQuote && (
          <div>
            <div className="mx-3 p-1 mt-4 mb-2">
              <div className="bg-[#393838] opacity-40 rounded-xl w-full h-[1px]"></div>
            </div>
            <div className="mx-5 mt-4">
              <div className="relative flex justify-center">
                <img src="/icons/quote.svg" alt="" />
                <div
                  className="absolute right-0"
                  onClick={() => {
                    setShowQuote(false);
                  }}
                >
                  <img
                    className="cursor-pointer"
                    width="25px"
                    src="/icons/close.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center">
                It is not that I&apos;m so smart. But I stay with the questions
                much longer.
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
              <div className="w-20 rounded-[1px] bg-[#F79E1B] h-[1px] mx-auto mt-3"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
