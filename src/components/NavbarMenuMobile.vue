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
      <MenuItems
        class="flex flex-col gap-1 justify-start items-start backdrop-blur-[2px] bg-opacity-[98%] text-[1.25rem] font-normal z-20 absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white text-black dark:text-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-black"
      >
        <MenuItem class="px-1 pl-2">
          <router-link
            to="/posts"
            class="group px-1 py-1 rounded-md h-[100%] w-[100%] flex hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 ease-in-out"
          >
            <button class="group-hover:underline">Posts</button>
          </router-link>
        </MenuItem>
        <MenuItem class="px-1 pl-2">
          <router-link
            class="group px-1 py-1 rounded-md h-[100%] w-[100%] flex hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 ease-in-out"
            to="/release-notes"
          >
            <button class="group-hover:underline">Release Notes</button>
          </router-link>
        </MenuItem>
        <MenuItem class="px-1 pl-2">
          <router-link
            class="group px-1 rounded-md h-[100%] w-[100%] flex hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 ease-in-out"
            to="/surveys"
          >
            <button class="group-hover:underline">Surveys</button>
          </router-link>
        </MenuItem>
        <MenuItem class="px-1 pl-2">
          <router-link
            class="group px-1 rounded-md h-[100%] w-[100%] flex hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 ease-in-out"
            to="https://github.com/xfxpositions"
          >
            <button class="group-hover:underline">View Source</button>
          </router-link>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>
