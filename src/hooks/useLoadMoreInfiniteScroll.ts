import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useQueryMoviesData } from '../queries/movies';

const useLoadMoreInfiniteScroll = (listType: string | undefined) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useQueryMoviesData(listType);
  const { inView, ref } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  const movieListData = data?.pages?.flatMap(page => page.results);

  return { hasNextPage, isFetching, isFetchingNextPage, movieListData, ref };
};

export default useLoadMoreInfiniteScroll;
