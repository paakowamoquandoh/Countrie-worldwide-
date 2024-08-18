import { useRoutes } from "react-router-dom";
import { Countries } from "../appPages/Countries";
import { CountryPage } from "../appPages/CountryPage";

type MainRouteProps = {
  toggleTheme: () => void;
};

export const MainRoute = ({ toggleTheme }: MainRouteProps) => {
  return useRoutes([
    { path: '/', element: <Countries  /> },
    { path: '/country/:name', element: <CountryPage  /> },
    { path: '/code/:code', element: <CountryPage  /> },
  ]);
};
