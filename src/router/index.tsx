import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { MovieList, movieDetailLoader, movieListLoader } from '../pages';
import ErrorPage from '../pages/ErrorPage';
import MovieDetail from '../pages/MovieDetail';
import queryClient from '../utils/queryClient';
import ROUTE_PATH from './ROUTE_PATH';

const router = createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <MovieDetail />,
            loader: movieDetailLoader(queryClient),
            path: ROUTE_PATH.MOVIE_DETAIL_PAGE,
          },
        ],
        element: <MovieList />,
        loader: movieListLoader(queryClient),
        path: ROUTE_PATH.LIST_TYPE,
      },
    ],
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.ROOT,
  },
]);

export default router;
