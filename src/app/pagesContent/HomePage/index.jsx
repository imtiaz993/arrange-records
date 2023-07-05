import React from "react";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BreadCrumbs from "./components/BreadCrumbs";
import PreviousTest from "./components/PreviousTest";

const HomePage = () => {
  return (
    <div className="bg-[#272727]">
      <Appbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <BreadCrumbs />
          <div className="flex justify-between">
            <Content />
            <PreviousTest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
