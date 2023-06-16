import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import {
  Home,
  MovieDetail,
  NowPlaying,
  Upcoming,
  homeLoader,
  movieDetailLoader,
  nowPlayingLoader,
  upcominggLoader,
} from '../pages';
import ErrorPage from '../pages/ErrorPage';
import queryClient from '../utils/queryClient';
import ROUTE_PATH from './ROUTE_PATH';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        loader: homeLoader(queryClient),
        path: ROUTE_PATH.HOME,
      },
      {
        element: <Upcoming />,
        loader: upcominggLoader(queryClient),

        path: ROUTE_PATH.COMING_SOON,
      },
      {
        element: <NowPlaying />,
        loader: nowPlayingLoader(queryClient),

        path: ROUTE_PATH.NOW_PLAYING,
      },
      {
        element: <MovieDetail />,
        loader: movieDetailLoader(queryClient),
        path: ROUTE_PATH.MOVIE_DETAIL_PAGE,
      },
    ],
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
  },
]);

export default router;
