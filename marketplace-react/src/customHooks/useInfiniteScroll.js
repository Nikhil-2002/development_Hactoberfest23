import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    callback();
  }, [isLoading]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    )
      return;
    setIsLoading(true);
  }

  return [isLoading, setIsLoading];
};

export default useInfiniteScroll;
