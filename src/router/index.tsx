import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { ComingSoon, Home, NowPlaying } from "../pages";
import ErrorPage from "../pages/ErrorPage";
import ROUTE_PATH from "./ROUTE_PATH";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <ComingSoon />,
        path: ROUTE_PATH.COMING_SOON,
      },
      {
        element: <NowPlaying />,
        path: ROUTE_PATH.NOW_PLAYING,
      },
    ],
    element: <App />,
    errorElement: <ErrorPage />,
    path: ROUTE_PATH.HOME,
  },
]);

export default router;
