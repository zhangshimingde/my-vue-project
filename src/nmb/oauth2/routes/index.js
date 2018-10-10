import rely from "../oauth2rely";

const onEnter = (to, from, next) => {
  rely.redirectToAuthUrl();
  next();
};

export default {
  path: "/__oauth2",
  component: () => import("./Layout.vue"),
  children: [
    {
      path: "auth",
      name: "auth",
      beforeEnter: onEnter,
      meta: {
        isPublic: true
      },
      component: () => import("./auth")
    },
    {
      path: "callback",
      name: "callback",
      meta: {
        isPublic: true
      },
      component: () => import("./callback")
    },
    {
      path: "logout",
      name: "logout",
      meta: {
        isPublic: true
      },
      component: () => import("./logout")
    }
  ]
};
