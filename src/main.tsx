import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import firebase from "firebase/compat/app";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";

console.log(firebase);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
