import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { Home, NowPlaying, Upcoming, homeLoader, movieDetailLoader, nowPlayingLoader, upcomingLoader } from '../pages';
import ErrorPage from '../pages/ErrorPage';
import queryClient from '../utils/queryClient';
import ROUTE_PATH from './ROUTE_PATH';

const router = createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <Home />,
            loader: movieDetailLoader(queryClient),
            path: ROUTE_PATH.MOVIE_DETAIL_PAGE,
          },
        ],
        element: <Home />,
        loader: homeLoader(queryClient),
        path: ROUTE_PATH.HOME,
      },
      {
        children: [
          {
            element: <Upcoming />,
            loader: movieDetailLoader(queryClient),
            path: ROUTE_PATH.MOVIE_DETAIL_PAGE,
          },
        ],
        element: <Upcoming />,
        loader: upcomingLoader(queryClient),
        path: ROUTE_PATH.COMING_SOON,
      },
      {
        children: [
          {
            element: <NowPlaying />,
            loader: movieDetailLoader(queryClient),
            path: ROUTE_PATH.MOVIE_DETAIL_PAGE,
          },
        ],
        element: <NowPlaying />,
        loader: nowPlayingLoader(queryClient),
        path: ROUTE_PATH.NOW_PLAYING,
      },
    ],
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
  },
]);

export default router;
