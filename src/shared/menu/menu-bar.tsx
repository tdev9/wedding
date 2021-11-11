import * as React from "react";
import "./menu-bar.styles.scss";
export type MenuBarProps = {
  onClickMenuItem: (menuItem: "intro" | "programs" | "bus") => void;
};
export const Menubar: React.FC<MenuBarProps> = ({ onClickMenuItem }) => {
  return (
    <nav className="nav-menu">
      <a onClick={() => onClickMenuItem("intro")}>Bevezető</a>
      <a onClick={() => onClickMenuItem("programs")}>Programok</a>
      <a onClick={() => onClickMenuItem("bus")}>Busz indulások</a>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </nav>
  );
};
