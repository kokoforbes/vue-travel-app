import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store.js";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },

  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails"*/ "../views/ExperienceDetails.vue"
          ),
      },
    ],

    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );

      if (exists) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    },
  },

  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound"*/ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
