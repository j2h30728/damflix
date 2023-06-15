import { useLoaderData } from "react-router-dom";

import { GetMoviesResponseData, GetResponse } from "../../types/movies";

const NowPlaying = () => {
  const test = useLoaderData() as GetResponse<GetMoviesResponseData>;
  console.log(test);
  return <h2>NowPlaying</h2>;
};

export default NowPlaying;
