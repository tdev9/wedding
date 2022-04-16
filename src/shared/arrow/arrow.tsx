import classNames from "classnames";
import React from "react";
import { useTransformWidthOnPx } from "../../hooks/use-transform-width-on-px";
import { v4 as uuidv4 } from "uuid";

import "./arrow.styles.scss";
type ArrowProps = {
  width: string;
  numberOfItems?: number;
  className?: string;
  color?: string;
  fadeConfig: { scrollPx: number; fadeTime: number; delay: number };
};
export const Arrow: React.FC<ArrowProps> = ({
  numberOfItems = 4,
  className,
  fadeConfig,
  width,
  color = "black",
}) => {
  const svgId = uuidv4();

  useTransformWidthOnPx(
    `[id='${svgId}']`,
    fadeConfig.scrollPx,
    fadeConfig.fadeTime,
    fadeConfig.delay,
    width
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
          stroke-width="3"
          marker-end={`url(#${markerId})`}
          stroke={color}
        />
      </svg>
    </span>
  );
};
