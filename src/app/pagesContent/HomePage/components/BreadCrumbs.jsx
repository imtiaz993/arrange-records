import React from "react";

const BreadCrumbs = () => {
  return (
    <div className="bg-[#181818] flex items-center py-2">
      <p className="text-[#484848] text-xs cursor-pointer">Home</p>
      <img className="mx-3" src="/icons/right-chevron.svg" alt="" />
      <p className="text-[#484848] text-xs cursor-pointer">Bread crumbs</p>
      <img className="mx-3" src="/icons/right-chevron.svg" alt="" />
      <p className="text-[#7E7E7E] text-xs cursor-pointer">Bred crumbs</p>
    </div>
  );
};

export default BreadCrumbs;
