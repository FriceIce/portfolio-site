import { useEffect, useRef } from "react";

const useIsMounted = (fn: () => void, deps: any[]) => {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current === false) {
      ref.current = true;
      return;
    }

    fn();
  }, deps);
};

export default useIsMounted;
