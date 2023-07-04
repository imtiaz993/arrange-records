import React from "react";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const HomePage = () => {
  return (
    <div>
      <Appbar />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default HomePage;
