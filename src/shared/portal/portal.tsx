import * as React from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  onClickPortalBackground: () => void;
  className?: string;
  element?: string;
};
export const Portal: React.FC<PortalProps> = ({
  children,
  onClickPortalBackground,
  className = "root-portal",
  element = "div",
}) => {
  const [container] = React.useState(() => {
    return document.createElement(element);
  });

  React.useEffect(() => {
    container.classList.add(className);
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(
    <div onClick={onClickPortalBackground}>
      <div className="modal">
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    container
  );
};
