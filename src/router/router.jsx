import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/error-page.jsx";
import Layout from "../pages/Layout.jsx";

import Track from "../pages/tracks/Index.jsx";
import TrackDetail from "../pages/tracks/Detail.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Track />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tracks/:id",
        element: <TrackDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/faq",
        element: <div>FAQ</div>,
        errorElement: <ErrorPage />,
      }
    ]
  },
]);
