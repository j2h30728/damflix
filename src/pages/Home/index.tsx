import { Link, useLoaderData } from "react-router-dom";

import ROUTE_PATH from "../../router/ROUTE_PATH";
import { GetMoviesResponseData, GetResponse } from "../../types/movies";

const Home = () => {
  const test = useLoaderData() as GetResponse<GetMoviesResponseData>;
  console.log(test);
  return (
    <>
      <h2>Home</h2>
      <nav>
        <div>
          <Link to={ROUTE_PATH.COMING_SOON}>ROUTE_PATH.COMING_SOON</Link>
        </div>
        <div>
          <Link to={ROUTE_PATH.NOW_PLAYING}>ROUTE_PATH.NOW_PLAYING</Link>
        </div>
      </nav>
    </>
  );
};

export default Home;
