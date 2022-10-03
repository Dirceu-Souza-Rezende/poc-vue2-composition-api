import { RouteConfig } from "vue-router";
import Todos from "../components/Todos";
import Home from "../views/Home";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
];

export default routes;
