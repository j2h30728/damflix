import { useLoaderData } from "react-router-dom";

import { GetMoviesResponseData, GetResponse } from "../../types/movies";

const Upcoming = () => {
  const test = useLoaderData() as GetResponse<GetMoviesResponseData>;
  console.log(test);
  return <h2>Up coming</h2>;
};

export default Upcoming;
