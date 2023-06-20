import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useLoadMoreInfiniteScroll = (fetchNextPage: () => void) => {
  const { inView, ref } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return { ref };
};
export default useLoadMoreInfiniteScroll;
