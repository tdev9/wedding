import { useEffect } from "react";
export const useTransformWidthOnPx = (
  elementSelector: string,
  scrollPx: number,
  fadeTime: number,
  delay: number,
  maxWidth: string,
  isTransformStartable: boolean
) => {
  useEffect(() => {
    if (isTransformStartable) {
      const element = document.querySelector<HTMLElement>(elementSelector);
      let faded = false;

      const onScroll = () => {
        const body = document.querySelector("html");
        const y = body?.scrollTop;
        if (y && element && !faded && y > scrollPx) {
          transformWidth(element, fadeTime, delay, maxWidth);
          faded = true;
        }
      };
      document.addEventListener("scroll", onScroll);
    }
  }, [isTransformStartable]);
};

function transformWidth(
  el: HTMLElement,
  time: number,
  delay: number,
  maxWidth: string
) {
  el.style.opacity = "0";

  let last = +new Date();
  const tick = () => {
    el.style.opacity = `${+el.style.opacity + (+new Date() - last) / time}`;

    last = +new Date();
    el.style.width = maxWidth;
    if (+el.style.opacity < 1) {
      requestAnimationFrame(tick) || setTimeout(tick, 16);
    }
  };

  setTimeout(tick, delay);
}
