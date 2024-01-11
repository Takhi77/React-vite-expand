import { routerType } from "../utilities";
import Home from "./home";
import Team from "./team";

const pagesData: routerType[] = [
  { path: "", element: <Home />, title: "" },
  { path: "team", element: <Team />, title: "" },
];

export default pagesData;
