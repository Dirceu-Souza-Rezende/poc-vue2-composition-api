import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TodosRoutes from "@/features/Todo/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...TodosRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
