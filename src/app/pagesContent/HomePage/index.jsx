import React from "react";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BreadCrumbs from "./components/BreadCrumbs";

const HomePage = () => {
  return (
    <div>
      <Appbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <BreadCrumbs />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
