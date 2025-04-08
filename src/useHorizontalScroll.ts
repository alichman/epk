import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
    const elRef = useRef<Element>(undefined);
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        // @ts-ignore
        const onWheel =  (e) => {
            console.log(typeof(e))
            if (e.deltaY == 0) return;
            e.preventDefault();
            el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
            });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }