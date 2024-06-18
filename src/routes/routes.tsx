import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Layout from "../pages/Layout/Layout";
import PortfolioPage from "../pages/Portfolio/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <PortfolioPage />}
        ],
      }
    ],
  },
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       errorElement: <ErrorPage />,
  //       children: [
  //           {index: true, element: <ErrorPage />},
  //           {path: "/:transactionId", element: <MainPage />}
  //       ],
  //     }

        
  //   ],
  // },
  // {
  //   path: "/",
  //   element: <Layout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { index: true, element: <ErrorPage /> },
  //     { path: "/:transactionId", element: <MainPage /> },
  //   ],
  // },
]);

export default router;
