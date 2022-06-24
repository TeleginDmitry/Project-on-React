import { useEffect, useRef } from "react";

export const useObserver = (childRef, limitPage,setLimitPage, totalCount, loader, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (loader) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries, observer) => {
      
      if (entries[0].isIntersecting && limitPage.page < totalCount) {
        callback();
        setLimitPage({...limitPage, page: limitPage.page + 1})
        console.log(limitPage.page);
      }
    });

    observer.current.observe(childRef.current);
  }, [loader]);
};
