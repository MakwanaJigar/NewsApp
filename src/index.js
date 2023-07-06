import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import {
//   createBrowserRouter as MJ,
//   // Router,
//   RouterProvider,
//   // Route
// } from "react-router-dom";
// import News from './component/News';
// import NewsItems from './component/NewsItems';

// const router= MJ([
//   {
//     path:"/",
//     element:<News/>
//   },{
//     path:"about",
//     element:<NewsItems/>
//   }
// ])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <RouterProvider router={router} /> */}
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </>
);
reportWebVitals();
