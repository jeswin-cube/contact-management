import React from "react";
import { TrackerLineGraph } from "../components";

export const DiseaseTracker = () => {
  return (
    <div className={"flex flex-col items-center justify-center h-[100%] w-[100%] p-8"}>
      <p className={"text-2xl mt-[8px] text-center"}>Disease Tracker</p>
      <TrackerLineGraph />
    </div>
  );
};
