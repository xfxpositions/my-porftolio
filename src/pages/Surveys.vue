<template>
  <div class="z-10 relative">
    <h1 class="text-3xl mb-2">Surveys</h1>
    <hr />
    <div
      class="backdrop-blur-[2px] z-10 p-6 pl-7 gap-2 bg-zinc-500 flex-col flex w-fit bg-opacity-50 mx-auto rounded-md mt-3"
    >
      <template v-for="survey in surveys">
        <li
          class="z-10 group hover:underline cursor-pointer inline-block box-border"
          @click="go(survey.title, survey._id)"
        >
          {{ survey.title }}
          <font-awesome-icon
            icon="fa-solid fa-right-long"
            class="opacity-0 -translate-x-1 group-hover:translate-x-1 duration-300 ease transition-all group-hover:opacity-100"
          />
        </li>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axiosUtil from "../util/axios.js";
const router = useRouter();

const surveys = ref([]);

axiosUtil.get("/").then((result) => {
  console.log(result.data.Surveys);

  result.data.Surveys.forEach((data) => {
    surveys.value.push(data);
  });
});
const go = (title, id) => {
  router.push(`/survey/${id}`);
};
</script>
