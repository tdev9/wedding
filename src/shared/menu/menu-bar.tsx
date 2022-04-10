import classNames from "classnames";
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import "./menu-bar.styles.scss";
import cssVariables from "../../variables.styles.scss";

export type MenuBarProps = {
  onClickMenuItem: (menuItem: "intro" | "programs" | "bus" | "menu") => void;
};
export const Menubar: React.FC<MenuBarProps> = ({ onClickMenuItem }) => {
  const [isSticky, setSticky] = React.useState(false);
  const [active, setActive] = React.useState<string>();
  const [openedHamburger, setOpenHamburger] = React.useState(false);
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

  const isMobile = useMediaQuery({
    query: `(max-width: ${cssVariables.breakpointTablet})`,
  });

  const clickHamburger = React.useCallback(() => {
    setOpenHamburger(!openedHamburger);
  }, [openedHamburger]);
  const navClass = classNames("nav-menu", {
    "sticky-nav": isSticky,
    "opened-hamburger": openedHamburger,
    hamburger: isMobile,
  });

  return (
    <nav className={navClass}>
      <a className="hamburger-icon" onClick={clickHamburger}>
        <span />
        <span />
        <span />
      </a>
      <span className="menu-items">
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
            navigate("/#menu");
            onClickMenuItem("menu");
          }}
        >
          Étel/Ital
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
          <div className="dot"></div>
        </div>
      </span>
    </nav>
  );
};
