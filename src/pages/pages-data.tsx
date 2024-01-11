import { routerType } from "../utilities";
import Art from "./art";
import Home from "./home";
import Team from "./team";

const pagesData: routerType[] = [
  { path: "", element: <Home />, title: "" },
  { path: "team", element: <Team />, title: "" },
  { path: "art", element: <Art />, title: "" },
];

export default pagesData;
