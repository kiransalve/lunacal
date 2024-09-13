import React from "react";
import Navigation from "./Navigation";
import Gallary from "./Gallary";

const RightBox = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-800 overflow-hidden">
      <div className=" flex-1">
        <Navigation />
      </div>
      <div className="flex-1">
        <Gallary />
      </div>
    </div>
  );
};

export default RightBox;
