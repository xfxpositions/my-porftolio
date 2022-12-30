<template>
  <nav>
    <h2>Navbar</h2>
  </nav>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>
