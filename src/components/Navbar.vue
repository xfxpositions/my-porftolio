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
    <div class="z-10 hidden md:block">
      <LinkVue to="/posts" class="text-lg">Posts</LinkVue>

      <LinkVue to="/release-notes" class="text-lg">Release Notes</LinkVue>
      <LinkVue to="/surveys" class="text-lg">Surveys</LinkVue>
    </div>
    <div class="z-10 flex gap-4">
      <DarkModeVue class="z-10" />
      <Github class="z-10" />
    </div>
    

    <div>
      <NavbarMenuMobile></NavbarMenuMobile>
    </div>
  </nav>
</template>
<script setup>
import LinkVue from "./Link.vue";
import DarkModeVue from "./DarkMode.vue";
import NavbarMenuMobile from "./NavbarMenuMobile.vue";
import Github from "./Github.vue";
</script>
