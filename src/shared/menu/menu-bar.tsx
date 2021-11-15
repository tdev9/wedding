import classNames from "classnames";
import * as React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-bar.styles.scss";

export type MenuBarProps = {
  onClickMenuItem: (menuItem: "intro" | "programs" | "bus") => void;
};
export const Menubar: React.FC<MenuBarProps> = ({ onClickMenuItem }) => {
  const [isSticky, setSticky] = React.useState(false);
  const [active, setActive] = React.useState<string>();
  const navigate = useNavigate();
  React.useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 380 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  const navClass = classNames("nav-menu", { "sticky-nav": isSticky });
  return (
    <nav className={navClass}>
      <a
        onClick={() => {
          navigate("/#intro");
          onClickMenuItem("intro");
        }}
      >
        Bevezető
      </a>
      <a
        onClick={() => {
          navigate("/#programs");
          onClickMenuItem("programs");
        }}
      >
        Programok
      </a>
      <a
        onClick={() => {
          navigate("/#bus");
          onClickMenuItem("bus");
        }}
      >
        Busz indulások
      </a>
      <div className="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </nav>
  );
};
