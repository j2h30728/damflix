import { Link, Outlet } from "react-router-dom";

import "./App.css";
import ROUTE_PATH from "./router/ROUTE_PATH";

function App() {
  return (
    <>
      <nav>
        <div>
          <Link to={ROUTE_PATH.COMING_SOON}>ROUTE_PATH.COMING_SOON</Link>
        </div>
        <div>
          <Link to={ROUTE_PATH.NOW_PLAYING}>ROUTE_PATH.NOW_PLAYING</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
