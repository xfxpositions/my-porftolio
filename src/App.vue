<template>
  <div
    class="h-[100%] min-h-screen md:pt-2 lg:pt-2 p-5 sm:p-10 md:p-15 lg:p-20 -z-10 text-center transition-colors duration-500 ease-in-out bg-[#F0E7DB] dark:bg-[rgba(0,26,30,var(--tw-bg-opacity))] dark:text-white font-bold"
  >
    <Navbar></Navbar>
    <router-view class="router-view" v-slot="{ Component }">
      <Transition
        name="fade-slide"
        mode="out-in"
        :duration="{ enter: 800, leave: 800 }"
        :delay="{ enter: 100, leave: 0 }"
      >
        <component :is="Component" />
      </Transition>
      <Stars></Stars>
    </router-view>
  </div>
</template>
<script setup>
import Stars from "./components/Stars.vue";
import DarkModeVue from "./components/DarkMode.vue";
import Navbar from "./components/Navbar.vue";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode({
  attribute: "theme",
  modes: {
    // custom colors
    dim: "dim",
    cafe: "cafe",
  },
});
if (localStorage.getItem("vueuse-color-scheme") == "auto") {
  mode.value = "dark";
}

console.log(mode.value);
</script>
<style>
@import url("https://fonts.cdnfonts.com/css/euclid-circular-a");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease-out;
  transition-delay: 0.1s;
}

.fade-slide-enter {
  transform: translateY(10px);
  opacity: 0;
}

.fade-slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #212121;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(190, 190, 190);
}
</style>
