"use client";
import React, { useRef, useEffect, useState } from "react";
import Appbar from "./components/Appbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BreadCrumbs from "./components/BreadCrumbs";
import PreviousTest from "./components/PreviousTest";

const HomePage = () => {
  const divRef = useRef(null);
  const [imagesHeight, setImagesHeight] = useState(
    divRef.current?.clientHeight
  );

  useEffect(() => {
    const divHeight = divRef.current.clientHeight;
    setImagesHeight(divHeight);
  }, []);
  return (
    <div className="bg-[#181818] min-h-screen max-h-screen overflow-hidden">
      <Appbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <BreadCrumbs />
          <div className="h-[calc(100vh-76px)] rounded-ss-xl bg-[#272727] overflow-hidden flex justify-between">
            <Content divRef={divRef} />
            <PreviousTest imagesHeight={imagesHeight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
