import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    children: [
      {
        path: "",
        name: "products",
        component: () =>
          import(
            /* webpackChunkName: "productsSpotlight" */ "../components/ProductsSpotlight.vue"
          )
      },
      {
        path: ":id",
        name: "product",
        component: () =>
          import(/* webpackChunkName: "product" */ "../components/Product.vue")
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (products.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/solutions",
    children: [
      {
        path: "",
        name: "solutions",
        component: () =>
          import(
            /* webpackChunkName: "solutionsSpotlight" */ "../components/SolutionsSpotlight.vue"
          )
      },
      {
        path: ":id",
        name: "solution",
        component: () =>
          import(/* webpackChunkName: "product" */ "../components/Solution.vue")
      }
    ],
    component: () => import("../views/Solutions.vue")
  },
  {
    path: "/services",
    children: [
      {
        path: "",
        name: "services",
        component: () =>
          import(
            /* webpackChunkName: "servicesSpotlight" */ "../components/ServicesSpotlight.vue"
          )
      },
      {
        path: ":id",
        name: "service",
        component: () =>
          import(/* webpackChunkName: "product" */ "../components/Service.vue")
      }
    ],
    component: () => import("../views/Services.vue")
  },
  {
    path: "/platform",
    children: [
      {
        path: "",
        name: "platform",
        component: () =>
          import(
            /* webpackChunkName: "platformSpotlight" */ "../components/PlatformSpotlight.vue"
          )
      },
      {
        path: ":id",
        name: "platformModule",
        component: () =>
          import(
            /* webpackChunkName: "platformModule" */ "../components/PlatformModule.vue"
          )
      }
    ],
    component: () => import("../views/Platform.vue")
  },
  {
    path: "/network",
    children: [
      {
        path: "",
        name: "network",
        component: () =>
          import(
            /* webpackChunkName: "networkSpotlight" */ "../components/NetworkSpotlight.vue"
          )
      },
      {
        path: ":id",
        name: "networkComponent",
        component: () =>
          import(
            /* webpackChunkName: "etworkComponent" */ "../components/NetworkComponent.vue"
          )
      }
    ],
    component: () => import("../views/Network.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
