import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { SignIn, SignUp } from '../auth/pages';
import ROUTE_PATH from '../constants/route';
import { MovieDetail, MovieList, movieDetailLoader, movieListLoader } from '../movies/pages';
import ErrorPage from '../pages/ErrorPage';
import queryClient from '../utils/queryClient';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <SignIn />,
        path: ROUTE_PATH.SIGN_IN,
      },
      {
        element: <SignUp />,
        path: ROUTE_PATH.SIGN_UP,
      },
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
