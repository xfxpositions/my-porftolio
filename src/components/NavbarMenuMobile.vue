<template>
  <Menu
    as="div"
    class="z-10 cursor-pointer relative md:hidden hover:bg-[#f8dcb8] dark:hover:bg-[#2f3947] transition-all duration-300 ease-in-out"
  >
    <MenuButton
      class="border-slate-400 dark:border-slate-400 p-2 border-[2px] w-[50px] h-[50px] rounded-md shadow-md"
    >
      <font-awesome-icon icon="fa-solid fa-bars" />
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
    </transition>
  </Menu>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
