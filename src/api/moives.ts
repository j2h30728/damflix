import type { QueryKey } from '@tanstack/react-query';

import apiClient, { BASE_URL } from '.';
import { GetMoviesResponseData } from '../types/movies';

export const getMovieListFetcher = async ({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: QueryKey;
}): Promise<GetMoviesResponseData> => {
  const result = await apiClient<GetMoviesResponseData>(`${BASE_URL}${queryKey.join('/')}&page=${pageParam}`);
  console.log(result); // 이 부분 추가
  return result.data;
};