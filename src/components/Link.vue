<template>
  <router-link
    class="text-rose-600 dark:text-rose-300 text-sm decoration-black dark:decoration-white hover:underline before:h-2 underline-offset-2 inline-block transition-all duration-300 ease-in-out m-2"
    :to="link"
    ><slot />
  </router-link>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps(["to"]);
const link = ref(props.to);
</script>
