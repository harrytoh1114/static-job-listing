import { useEffect, useState } from "react";

const useCurrentWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const getCurrentWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getCurrentWidth);

    return () => {
      window.removeEventListener("resize", getCurrentWidth);
    };
  }, []);

  return width;
};

export default useCurrentWidth;
