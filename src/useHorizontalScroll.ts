import { useRef, useEffect, Ref } from "react";

export function useHorizontalScroll<T extends HTMLElement>() {
    const elRef = useRef<T>(null);
  
    useEffect(() => {
      const el = elRef.current;
      if (!el) return;
  
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      };
  
      el.addEventListener('wheel', onWheel, { passive: false });
  
      return () => {
        el.removeEventListener('wheel', onWheel);
      };
    }, []);
  
    return elRef as Ref<HTMLDivElement>;
  }