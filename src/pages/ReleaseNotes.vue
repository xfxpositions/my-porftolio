<template>
  <div class="z-10">
    <h1>Release Notes</h1>
    <Section delay="100">
      <ul>
        <div
          class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
        >
          06/05/2023
          <ul class="ml-4 text-lg font-normal">
            <li>Turkish language support.</li>
            <li>smooth page transitions.</li>
            <li>
              design improvements
              <a href="https://github.com/xfxpositions/maria"
                >I'm continue Maria.rs</a
              >
              .
            </li>
          </ul>
        </div>
      </ul>
    </Section>
    <Section delay="200">
      <ul>
        <div
          class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
        >
          16/03/2023
          <ul class="ml-4 text-lg font-normal">
            <li>A few changed in what if know.</li>
            <li>I came back to this project.</li>
            <li>Navbar Github link added.</li>
            <li>
              There is still have some problems, i'll fix in the future or throw
              to thrash this old project. I don't wanna write any Javascript
              code anymore, but maybe i'll reboot this project in nextjs. If you
              wanna ask "why nextjs, your answer probably gonna be
              <span class="font-semibold"
                >'becuase nuxt3 is sucks and sveltekit needs moore to
                improve.'</span
              >"
            </li>
          </ul>
        </div>
      </ul>
    </Section>
    <Section delay="300">
      <ul>
        <div
          class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
        >
          1/04/2023
          <ul class="ml-4 text-lg font-normal">
            <li>Navbar menu mobile.</li>
            <li>
              Working on smooth page transitions, it can be a little bit broken
              right now.
            </li>
            <li>Multiple languages coming soon!.</li>
            <li>
              i'm ready to add posts pages but i'm not sure should i use backend
              server and if i use should i select rust or nodejs. Maybe i can
              write the server with my own http framework in rust, checkout
              <a href="https://github.com/xfxpositions/maria">this</a> .
            </li>
          </ul>
        </div>
      </ul>
    </Section>
  </div>
</template>
<script setup>
import Section from "../components/Section.vue";
</script>
