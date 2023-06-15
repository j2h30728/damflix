import { useQuerUpcomingMovies } from "../queries/movies";

const Upcoming = () => {
  const test = useQuerUpcomingMovies();
  console.log(test);
  return <h2>Up coming</h2>;
};

export default Upcoming;
