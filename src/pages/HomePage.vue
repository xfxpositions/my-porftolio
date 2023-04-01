<template>
  <div class="grid justify-center align-center flex-col">
    <div class="z-10">
      <div
        class="text-xl p-2 backdrop-blur-[2px] bg-zinc-400 m-auto rounded-lg bg-opacity-20"
      >
        Hello, I'm Yusuf Karaca. I'm just posting about my hobbies, feelings,
        interestings
      </div>
      <h1>About Me</h1>
      <h2 class="font-normal">
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
        Science? (it can be).
      </div>
      <div class="px-10 py-4">
        <hr />
      </div>
      <h2 class="text-rose-400">
        Technologies what i <span class="">know</span>
      </h2>
      <div
        class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
      >
        <h1>Javascript.</h1>
        <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
          <li>Modern ES6.</li>
          <li>
            Vue js (in the future I will already make vue js ui framework..
            maybe).
          </li>
          <li>React js.</li>
          <li>Nodejs (ExpressJs,Fastify).</li>
        </ul>
      </div>
      <div
        class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
      >
        <h1 class="">Rust - Web and System Programming.</h1>

        <p class="font-normal text-[1rem] md:text-[1.2rem]">
          Note: My interest to Rust has increased in the last 3 months. I am
          currently working on my operating system called xfxOS. I will create a
          separate page for details.
          <a
            class="underline text-red-400"
            href="https://github.com/xfxpositions/xfxOS/"
            >You can check here for details.</a
          >
        </p>
        <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
          <li>
            Rust web technologies, yew.rs wasm, web frameworks.
            <a
              href="https://github.com/xfxpositions/jsonwebtokens/blob/master/examples/hmac_sign_and_verify.rs"
              class="underline text-red-400"
              >Check out this fork, the first thing I wrote with Rust.</a
            >
            <br />
            <a
              href="https://github.com/xfxpositions/yew-basics"
              class="underline text-red-400"
              >Yew basic todo app lol.</a
            >
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
      >
        <h1>Devops.</h1>
        <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
          <li>Simple Devops.</li>
          <li>Ubuntu servers. Aws, Oracle Cloud</li>
          <li>
            Imap, Smtp, Web servers Basic Understanding of HTTP, websockets,
            internet protocols.
          </li>
          <li>Cyberpanel, Cpanel.</li>
        </ul>
      </div>
      <div
        class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
      >
        <h1>Blockchain.</h1>
        <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
          <li>Blockchain's working logic.</li>
          <li>
            Cryptocurrencies, you can check my repo (I want to develop bekircoin
            with rust in the future, it will be working with the Blockchain
            network this time).
          </li>
          <li>Simple level hashing algorithms.</li>
          <a href="https://github.com/bekircoin" class="text-red-400 underline"
            >repo of Bekircoin</a
          >
        </ul>
      </div>

      <hr class="mt-2" />
      <code class="text-sm md:text-[1.2rem]">Yusuf Karaca - 16/03/2023</code>
      <br />
      <a
        href="https://github.com/xfxpositions/my-porftolio"
        class="text-sm text-red-400 underline"
        >Source code</a
      >
    </div>
  </div>
</template>
<script setup>
import Section from "../components/Section.vue";
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
