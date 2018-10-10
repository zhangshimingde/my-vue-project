export default [
  {
    path: "/demo",
    name: "demo",
    component: () => import("@/views/demo/index.vue"),
    children: [
      {
        path: "sub",
        component: () => import("@/views/demo/sub/index.vue"),
        name: "sub"
      }
    ]
  }
];
