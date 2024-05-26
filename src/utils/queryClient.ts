import type { QueryFunctionContext } from '@tanstack/react-query';

import { QueryClient } from '@tanstack/react-query';

import apiClient, { BASE_URL } from '../api';

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await apiClient.get(`${BASE_URL}${queryKey.join('/')}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
    },
  },
});
export default queryClient;
