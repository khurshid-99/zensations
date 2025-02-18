import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import {
//   Blog,
//   OurPortfolio,
//   OurProjects,
//   UberUns,
//   UxUiDesign,
//   Workflow,
// } from "../components";

const routers = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    // { path: "/uberuns", element: <UberUns /> },
    // { path: "/ourprojects", element: <OurProjects /> },
    // { path: "/uxuidesign", element: <UxUiDesign /> },
    // { path: "/workflow", element: <Workflow /> },
    // { path: "/ourportfolio", element: <OurPortfolio /> },
    // { path: "/blog", element: <Blog /> },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enable the v7 behavior
    },
  }
);

export default routers;
