import classNames from "classnames";
import * as React from "react";
import "./section.styles.scss";
type SectionProps = {
  title?: string;
  contentComponent: () => any;
  imgSrc?: string;
  className?: string;
};
export const Section: React.FunctionComponent<SectionProps> = ({
  title,
  contentComponent,
  imgSrc,
  className,
}) => {
  const sectionClassName = classNames("section", className);
  console.log(contentComponent);
  return (
    <div className={sectionClassName}>
      <div>{title && <h1 className="text-center">{title}</h1>}</div>
      <div className="section-text">
        {imgSrc && (
          <div className="img-container">
            <img src={imgSrc} />
          </div>
        )}
        {contentComponent()}
      </div>
    </div>
  );
};
