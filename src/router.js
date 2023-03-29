import { createWebHashHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ReleaseNotes from "./pages/ReleaseNotes.vue";
import NotFound from "./pages/NotFound.vue";
import DarkThemeTest from "./pages/DarkThemeTest.vue";
import Surveys from "./pages/Surveys.vue";
import Survey from "./pages/Survey.vue";
import Posts from "./pages/Posts.vue";
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/release-notes", name: "ReleaseNotes", component: ReleaseNotes },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFound },
  { path: "/theme", name: "DarkThemeTest", component: DarkThemeTest },
  { path: "/surveys", name: "surveys", component: Surveys },
  { path: "/survey/:id", name: "survey", component: Survey },
  { path: "/posts", name: "posts", component: Posts },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
