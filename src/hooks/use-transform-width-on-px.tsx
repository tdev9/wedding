import React, { useEffect } from "react";
export const useTransformWidthOnPx = (
  elementSelector: string,
  scrollPx: number,
  fadeTime: number,
  delay: number,
  maxWidth: string
) => {
  useEffect(() => {
    const element = document.querySelector(elementSelector)!;
    let faded = false;

    const onScroll = function () {
      const body = document.querySelector("html")!;
      const y = body.scrollTop;
      if (!faded && y > scrollPx) {
        transformWidth(element, fadeTime, delay, maxWidth);
        faded = true;
      }
    };
    document.addEventListener("scroll", onScroll);
  }, []);
};

function transformWidth(
  el: any,
  time: number,
  delay: number,
  maxWidth: string
) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function () {
    el.style.opacity = +el.style.opacity + (+new Date() - last) / time;

    last = +new Date();
    el.style.width = maxWidth;
    if (+el.style.opacity < 1) {
      requestAnimationFrame(tick) || setTimeout(tick, 16);
    }
  };

  setTimeout(tick, delay);
}
