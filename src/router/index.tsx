import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { Home, NowPlaying, Upcoming, homeLoader, movieDetailLoader, nowPlayingLoader, upcominggLoader } from '../pages';
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
        element: <Home />,
        loader: movieDetailLoader(queryClient),
        path: ROUTE_PATH.MOVIE_DETAIL_PAGE,
      },
      {
        element: <Upcoming />,
        loader: upcominggLoader(queryClient),
        path: ROUTE_PATH.COMING_SOON,
      },
      {
        element: <Upcoming />,
        loader: movieDetailLoader(queryClient),
        path: `${ROUTE_PATH.COMING_SOON}${ROUTE_PATH.MOVIE_DETAIL_PAGE}`,
      },
      {
        element: <NowPlaying />,
        loader: nowPlayingLoader(queryClient),
        path: ROUTE_PATH.NOW_PLAYING,
      },
      {
        element: <NowPlaying />,
        loader: movieDetailLoader(queryClient),
        path: `${ROUTE_PATH.NOW_PLAYING}${ROUTE_PATH.MOVIE_DETAIL_PAGE}`,
      },
    ],
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
  },
]);

export default router;
