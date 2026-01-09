import type { RouteObject } from "react-router-dom";
import App from "../App";
import RootLayout from "./RootLayout";
import PokemonDetailedView from "../PokemonDetailedView/PokemonDetailedView";
import NotFound from "../pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "pokemon/:pokeId", element: <PokemonDetailedView /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
