import Vue from "vue";
import Router from "vue-router";
import oauth2rely from "@/nmb/oauth2/oauth2rely";
import authRoute from "@/nmb/oauth2/routes";
import demoRoutes from "./modules/demo";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "/",
    redirect: {
      name: "demo"
    }
  },
  authRoute,
  ...demoRoutes
];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
router.beforeEach((to, from, next) => {
  // 标记为isPublic的不进行校验
  if (!to.meta.isPublic) {
    oauth2rely.checkLogon(to, next);
  }
  next();
});
export default router;
