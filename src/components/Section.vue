<template>
  <div
    class="z-20 relative"
    v-motion
    :initial="{
      opacity: 0,
      y: 30,
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 1200,
      },
    }"
    :leave="{
      y: -100,
      opacity: 0,
    }"
  >
    <slot></slot>
  </div>
</template>
<script setup>
let { delay } = defineProps(["delay", "duration"]);
</script>
