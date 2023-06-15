import { Link } from "react-router-dom";

import { useQueryPopularMovies } from "../queries/movies";
import ROUTE_PATH from "../router/ROUTE_PATH";

const Home = () => {
  const test = useQueryPopularMovies();
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
