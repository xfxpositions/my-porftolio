<template>
  <div
    class="z-10 text-start relative backdrop-blur-[2px] p-10 rounded-lg dark:border-rose-400 border-rose-600 border-[1px] bg-slate-800 bg-opacity-10"
  >
    <h1 class="text-xl">{{ data?.title }}</h1>
    <hr />
    <template v-for="question in data?.questions">
      <h3 class="text-md">{{ question.name }}</h3>
      <h3 class="text-lg">{{ question.description }}</h3>
      <AnswersVue type="paragraph"></AnswersVue>
    </template>
    <div class="mx-4 flex w-[75%]">
      <button
        class="rounded-md group p-2 px-3 transition-all duration-200 ease-in-out graident-a bg-size hover:"
      >
        Send
        <font-awesome-icon
          icon="fa-solid fa-right-long"
          class="opacity-0 -translate-x-1 group-hover:translate-x-1 duration-300 ease transition-all group-hover:opacity-100"
        />
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axiosUtil from "../util/axios.js";
import AnswersVue from "../components/Answers.vue";
const route = useRoute();
const id = ref(route.params.id);
const data = ref(null);

axiosUtil.get(`/surveys/${id.value}`).then((response) => {
  data.value = response.data.result;
  console.log(data.value);
});
</script>
<style scoped>
.graident-a {
  background: linear-gradient(
    102.2deg,
    rgb(250, 45, 66) 9.6%,
    rgb(103, 28, 150) 96.1%
  );
  background-size: 500%;
}
.graident-a:hover {
  background-size: 100%;
}
</style>
