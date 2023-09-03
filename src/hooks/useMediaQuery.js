import { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
  const getMatches = (query) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }

    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

export default useMediaQuery;
