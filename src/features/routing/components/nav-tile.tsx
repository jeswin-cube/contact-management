import React from "react";

import { useNavigate } from "react-router-dom";

export type NavTileProps = {
  to: string;
  icon: JSX.Element;
  title: string;
};

export const NavTile: React.FC<NavTileProps> = ({ to, icon, title }) => {
  const navigate = useNavigate();

  return (
    <div className={"cursor-pointer"} onClick={() => navigate(to)}>
      <div className={"flex items-center mx-auto"}>{icon}</div>
      <p>{title}</p>
    </div>
  );
};
