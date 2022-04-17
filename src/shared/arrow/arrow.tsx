import classNames from "classnames";
import React from "react";
import { useTransformWidthOnPx } from "../../hooks/use-transform-width-on-px";
import { v4 as uuidv4 } from "uuid";

import "./arrow.styles.scss";
type ArrowProps = {
  width: string;
  className?: string;
  color?: string;
  isTransformStartable?: boolean;
  fadeConfig: { scrollPx: number; fadeTime: number; delay: number };
};
const Arrow: React.FC<ArrowProps> = ({
  className,
  fadeConfig,
  width,
  color = "black",
  isTransformStartable = true,
}) => {
  const svgId = uuidv4();

  useTransformWidthOnPx(
    `[id='${svgId}']`,
    fadeConfig.scrollPx,
    fadeConfig.fadeTime,
    fadeConfig.delay,
    width,
    isTransformStartable
  );
  const arrowClass = classNames("arrow", className);

  const markerId = uuidv4();
  return (
    <span className={arrowClass}>
      <svg id={svgId}>
        <defs>
          <marker
            id={markerId}
            markerWidth="4"
            markerHeight="8"
            refX="0"
            refY="1"
            viewBox="0 0 1 2"
          >
            <polygon points="0,0 1,1 0,2" fill={color} />
          </marker>
        </defs>
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          strokeWidth="3"
          markerEnd={`url(#${markerId})`}
          stroke={color}
        />
      </svg>
    </span>
  );
};
const memoizedArrow = React.memo(Arrow);
export { memoizedArrow as Arrow };
