import { QueryClient } from '@tanstack/react-query';

export const queryKey = ['movie', 'upcoming?language=ko'];

export const loader = (queryClient: QueryClient) => async () => {
  return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery(queryKey));
};
