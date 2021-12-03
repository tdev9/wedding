import classNames from "classnames";
import * as React from "react";
import "./section.styles.scss";
type SectionProps = {
  title?: string;
  imgSrc?: string;
  className?: string;
};
export const Section: React.FC<SectionProps> = ({
  title,
  imgSrc,
  className,
  children
}) => {
  const sectionClassName = classNames("section", className);
  return (
    <div className={sectionClassName}>
      <div>{title && <h1 className="text-center">{title}</h1>}</div>
      <div className="section-text">
        {imgSrc && (
          <div className="img-container">
            <img src={imgSrc} />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
