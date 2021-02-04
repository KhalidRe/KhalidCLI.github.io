import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Listrender",
    name: "Listrender",

    component: () => import("../views/Listrender.vue"),
  },
  {
    path: "/pro",
    name: "pro",
    component: () => import("../views/pro.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
