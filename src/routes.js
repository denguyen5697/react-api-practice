import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/products-list",
    exact: false,
    main: () => <ProductsListPage />,
  },
  {
    path: "/products/add",
    exact: false,
    main: ({history}) => <ProductActionPage history={history}/>,
  },
  {
    path: "/products/:id/edit",
    exact: false,
    main: ({match, history}) => <ProductActionPage history={history} match={match}/>,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  }
  
];

export default routes;
