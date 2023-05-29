import React from "react";

import { Outlet } from "react-router-dom";
import { SideNavBar } from "../components";

export const Root = () => {
  return (
    <>
      <div className={"h-[100%] flex"}>
        <SideNavBar />
        <div className={"w-[calc(100%-80px)]"}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
