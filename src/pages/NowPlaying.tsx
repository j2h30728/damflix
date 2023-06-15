import { useQueryNoPlayingMovies } from "../queries/movies";

const NowPlaying = () => {
  const test = useQueryNoPlayingMovies();
  console.log(test);
  return <h2>NowPlaying</h2>;
};

export default NowPlaying;
