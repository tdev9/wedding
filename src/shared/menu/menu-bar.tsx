import classNames from "classnames";
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import "./menu-bar.styles.scss";
import cssVariables from "../../variables.styles.scss";
type MenuItemIdentifier = "intro" | "programs" | "bus" | "menu";
export type MenuBarProps = {
  onClickMenuItem: (menuItem: MenuItemIdentifier) => void;
};
export const Menubar: React.FC<MenuBarProps> = ({ onClickMenuItem }) => {
  const [isSticky, setSticky] = React.useState(false);
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

  const onMenuItemClickWithNavigate = (
    itemIdentifier: MenuItemIdentifier
  ): void => {
    navigate(`/#${itemIdentifier}`);
    onClickMenuItem(itemIdentifier);
  };

  const clickHamburger = () => {
    setOpenHamburger(!openedHamburger);
  };

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
            onMenuItemClickWithNavigate("intro");
          }}
        >
          Bevezető
        </a>
        <a
          onClick={() => {
            onMenuItemClickWithNavigate("menu");
          }}
        >
          Étel/Ital
        </a>
        <a
          onClick={() => {
            onMenuItemClickWithNavigate("programs");
          }}
        >
          Programok
        </a>
        <a
          onClick={() => {
            onMenuItemClickWithNavigate("bus");
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
