import * as React from "react";
import "./app.styles.scss";
import { Welcome } from "./welcome/welcome";
export const App = () => {
  return (
    <div className="app-container container">
      <div className="row">
        <Welcome />
      </div>
    </div>
  );
};
