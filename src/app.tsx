import * as React from "react";
import "./app.styles.scss";
import { Menubar, MenuBarProps } from "./shared/menu/menu-bar";
import { Welcome } from "./welcome/welcome";
import { animateScroll } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";
export const App = () => {
  const welcomeRef = React.createRef<HTMLDivElement>();

  const onClickMenuItem = React.useCallback(
    (item: Parameters<MenuBarProps["onClickMenuItem"]>[0]) => {
      const element = welcomeRef.current?.querySelector(`#${item}`);
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop;
        animateScroll.scrollTo(offsetTop);
      }
    },
    []
  );

  return (
    <Router>
      <div className="app-container container">
        <div className="row">
          <div className="welcome-header">
            <div className="section-container">
              <h1 className="text-center">
                Andi & Tamás <br /> 2022. Április 23. Esztergom, 15:00
                <br />
              </h1>
              <p></p>
            </div>
          </div>
          <Menubar onClickMenuItem={onClickMenuItem} />
          <Welcome ref={welcomeRef} />
        </div>
      </div>
    </Router>
  );
};
