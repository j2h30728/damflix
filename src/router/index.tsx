import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { ComingSoon, Home, NowPlaying } from "../pages";

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <ComingSoon />,
        path: "coming-soon",
      },
      {
        element: <NowPlaying />,
        path: "now-playing",
      },
    ],
    element: <App />,
    path: "/",
  },
]);

export default router;
