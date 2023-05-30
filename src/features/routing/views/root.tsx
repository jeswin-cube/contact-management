import React, { useEffect } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SideNavBar } from "../components";

export const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/contacts");
    }
  }, [location.pathname, navigate]);

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
