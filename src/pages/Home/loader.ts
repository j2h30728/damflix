import { QueryClient } from "@tanstack/react-query";

import { GetMoviesResponseData, GetResponse } from "../../types/movies";

export const queryKey = ["movie", "popular"];

export const loader = (queryClient: QueryClient) => async () => {
  return (
    queryClient.getQueryData<GetResponse<GetMoviesResponseData>>(queryKey) ??
    (await queryClient.fetchQuery<GetResponse<GetMoviesResponseData>>(queryKey))
  );
};
