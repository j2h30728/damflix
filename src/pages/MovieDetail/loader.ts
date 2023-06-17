import type { LoaderFunctionArgs } from 'react-router-dom';

import { QueryClient } from '@tanstack/react-query';

export const getQueryKey = (movieId: string) => ['movie', `${movieId}?language=ko`];

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    if (!params.movieId) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      });
    }
    const queryKey = getQueryKey(params.movieId);
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery(queryKey));
  };
