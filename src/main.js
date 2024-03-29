import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import "./style.css";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

import Markdown from "vue3-markdown-it";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faSun,
  faMoon,
  faUserAstronaut,
  faRightLong,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { faSquareJs, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faUserSecret);
library.add(faSun);
library.add(faMoon);
library.add(faUserAstronaut);
library.add(faRightLong);
library.add(faSquareJs);
library.add(faBars);
library.add(faGithub);

const app = createApp(App);
app.use(router);
app.use(MotionPlugin).component("font-awesome-icon", FontAwesomeIcon);
app.use(MotionPlugin);

app.use(Markdown);

app.mount("#app");
