import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { routerType } from "../utilities";
import pagesData from "./pages-data";

function Router() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
}

export default Router;
