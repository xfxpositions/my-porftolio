<template>
  <button
    @click="changeTheme()"
    class="text-xl p-3 group min-w-[50px] hover:bg-gray-700 transition-all duration-300 hover:dark:bg-zinc-400 ease-in-out rounded-md cursor-pointer"
  >
    <font-awesome-icon
      :icon="isDark ? 'fa-sun' : 'fa-moon'"
      class="duration-700 text-2xl transition-rotate ease-in-out group-hover:rotate-90"
    />
  </button>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { ref } from "vue";
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
let isDark = useDark();
console.log(mode.value);
const toggleDark = useToggle(isDark);
const changeTheme = () => {
  toggleDark();
  if (useDark().value) {
    console.log("is dark!");
  }
};
</script>
