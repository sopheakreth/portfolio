import { createBrowserRouter } from "react-router-dom";
import { getRootPath } from "../utils/configProperties";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Layout from "../pages/Layout/Layout";
import PortfolioPage from "../pages/Portfolio/Portfolio";

const rootPath = getRootPath();

const router = createBrowserRouter([
  {
    path: rootPath + "/",
    element: <Layout bgValue="1" />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <PortfolioPage page="HOME" /> }
        ],
      }
    ],
  },
  {
    path: rootPath + "/about",
    element: <Layout bgValue="2" />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <PortfolioPage page="ABOUT" /> }
        ],
      }
    ],
  },
  {
    path: rootPath + "/resume",
    element: <Layout bgValue="3" />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <PortfolioPage page="RESUME" /> }
        ],
      }
    ],
  },
  {
    path: rootPath + "/project",
    element: <Layout bgValue="4" />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <PortfolioPage page="PROJECT" /> }
        ],
      }
    ],
  },
  {
    path: rootPath + "/contact",
    element: <Layout bgValue="5" />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <PortfolioPage page="CONTACT" /> }
        ],
      }
    ],
  },
]);

export default router;
