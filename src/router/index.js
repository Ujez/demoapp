import { createRouter, createWebHistory } from "vue-router";
import EvenList from "../views/EvenList.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "EvenList",
    component: EvenList,
  },
  {
    path: "/about",
    name: "About",

    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
