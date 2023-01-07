<template>
  <div class="grid justify-center align-center flex-col">
    <div class="z-10">
      <div
        class="text-xl p-2 backdrop-blur-[2px] bg-zinc-600 m-auto rounded-lg bg-opacity-20"
      >
        Hello, I'm Yusuf Karaca. I'm just posting about my hobbies, feelings,
        interestings
      </div>
      <h1>About Me</h1>
      <h2>
        There is not thing what need the know about me. Im 16 and I'm just
        trying
        <span class="graident"> somethings... </span>
      </h2>
      <div class="px-10 py-4">
        <hr />
      </div>
      <h2 class="text-rose-400 text-ellipsis">What i love.</h2>
      <div class="font-normal">
        Operating systems (also i use arch btw.), Altaic Languages, Computer
        Science.
      </div>
      <div class="px-10 py-4">
        <hr />
      </div>
      <h2 class="text-rose-400">
        Technologies what i <span class="">know</span>
      </h2>
    </div>
  </div>
</template>
<script setup>
import LinkVue from "../components/Link.vue";
</script>
<style scoped>
.graident {
  background: -webkit-linear-gradient(45deg, #008a9f, #00ff95 80%);
  background-clip: border-box;
  -webkit-background-clip: text;
  background-size: 120%;
  -webkit-text-fill-color: transparent;
  animation: graident-animation 5s ease-in infinite;
  transition: all ease-in-out 3s;
}
.graident:hover {
  background-color: #e91e63;
  color: #fff;
}
@keyframes graident-animation {
  0% {
    background: -webkit-linear-gradient(45deg, #008a9f, #00ff95 80%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  50% {
  }
  100% {
    background-position: right;
  }
}
</style>
