import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ReleaseNotes from "./pages/ReleaseNotes.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/release-notes", name: "ReleaseNotes", component: ReleaseNotes },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
