<template>
  <nav class="py-5 px-4 flex justify-between">
    <router-link to="/" class="z-10">
      <h1 class="group">
        <font-awesome-icon
          icon="fa-solid fa-user-astronaut"
          class="text-2xl text-dark dark:text-white group-hover:rotate-12 transition-rotate duration-300 ease-in-out"
        />
        Yusuf Karaca
      </h1>
    </router-link>
    <div class="divide-y"></div>
    <div class="z-10">
      <LinkVue to="/posts" class="text-lg">Posts</LinkVue>

      <LinkVue to="/release-notes" class="text-lg">Release Notes</LinkVue>
      <LinkVue to="/surveys" class="text-lg">Surveys</LinkVue>
      <DarkModeVue class="z-10" />
    </div>
  </nav>
</template>
<script setup>
import LinkVue from "./Link.vue";
import DarkModeVue from "./DarkMode.vue";
</script>
