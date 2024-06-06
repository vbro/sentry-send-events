import { createRouter, createWebHistory } from "vue-router";
import SendSentryEvents from "../views/SendSentryEvents.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SendSentryEvents,
    },
  ],
});

export default router;
