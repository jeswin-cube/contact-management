import React, { useMemo } from "react";
import { NavTile, NavTileProps } from "./nav-tile";
import { ContactIcon, ReportsIcon } from "../assets";

export const SideNavBar: React.FC = () => {
  const navTiles = useMemo(() => {
    const tiles: NavTileProps[] = [
      {
        to: "/contacts",
        icon: <ContactIcon size={"24"} />,
        title: "Contacts",
      },
      {
        to: "/disease-tracker",
        icon: <ReportsIcon size={"24"} />,
        title: "Disease Tracker",
      },
    ];

    return tiles;
  }, []);

  return (
    <div className={"flex-col flex items-center gap-[32px] w-[80px] border-r-[1px] h-[100vh] pt-[80px]"}>
      {navTiles.map((navTile, index) => {
        return <NavTile key={index} icon={navTile.icon} to={navTile.to} title={navTile.title} />;
      })}
    </div>
  );
};
