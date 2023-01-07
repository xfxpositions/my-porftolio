<template>
  <div class="font-normal bg-opacity-10 px-4 py-2 rounded-lg">
    <template v-if="type == 'text'">
      <input
        type="text"
        placeholder="Answer"
        class="text-sm placeholder:dark:text-white dark:bg-red-400 lg: outline-none rounded-md p-2 lg:w-[75%] transition-all duration-150 ease focus:outline-rose-400"
      />
    </template>

    <template v-if="type == 'paragraph'">
      <textarea
        placeholder="Paragraph"
        class="text-sm lg:text-2xl w-full md:text-xl placeholder:dark:text-white dark:bg-zinc-100 dark:bg-opacity-10 lg: outline-none rounded-md p-2 lg:w-[75%] transition-outline duration-150 ease focus:outline-rose-400"
      ></textarea>
    </template>

    <template v-if="type == 'checkbox'">
      <input type="checkbox" />
    </template>
  </div>
</template>
<script setup>
const props = defineProps(["type"]);
const type = props.type;
console.log(type);
</script>
