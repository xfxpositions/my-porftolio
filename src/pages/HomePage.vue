<template>
  <div
    class="grid justify-center align-center flex-col mt-8 md:mt-20 px-1 md:px-24"
  >
    <div class="z-10">
      <div style="height: calc(100vh - 95px)">
        <Section delay="100">
          <div
            class="flex shadow-md hero-box flex-col gap-y-7 p-5 md:px-8 py-12 md:py-16 text-left backdrop-blur-[3px] bg-zinc-700 m-auto rounded-lg bg-opacity-20"
          >
            <Section delay="200">
              <h1 class="text-rose-500 text-xl">Portfolyoma hoşgeldiniz!</h1>
            </Section>
            <Section delay="300">
              <h1 class="text-4xl">Merhaba, ben Yusuf Karaca.</h1>
            </Section>
            <!-- <h2 class="text-3xl graident">
              Projeleriniz için doğru geliştirici ben olabilirim.
            </h2> -->
            <Section delay="400">
              <div class="quote-1 text-4xl py-2">
                Projeleriniz için doğru geliştirici benim.
              </div>
            </Section>
            <Section delay="500">
              <span class="text-base md:text-xl block font-normal">
                Web ve işletim sistemleri üzerine çalışan bir yazılım
                geliştiricisiyim. Bu websitede hakkımda bilgi edinebilir ve
                benimle iletişime geçebilirsiniz. Ayrıca hobilerim, ilgi
                alanlarım ve fikirlerim hakkında gönderiler paylaşıyorum.
              </span>
            </Section>
          </div>
        </Section>
      </div>

      <div
        class="flex flex-col md:flex-row w-11/12 lg:w-8/12 flex-wrap gap-3 main-box items-start mt-10"
        id="about"
      >
        <div class="w-full md:w-3/5">
          <div class="w-full flex items-center flex-shrink flex-wrap gap-3">
            <div v-motion-slide-visible-bottom class="flex-grow ml-5">
              <div class="w-full border-b-2 border-slate-500"></div>
            </div>
            <div
              v-motion-slide-visible-bottom
              class="text-4xl main-text-color font-yolk"
            >
              Hakkımda
            </div>
            <div v-motion-slide-visible-bottom class="flex-grow mr-5">
              <div class="w-full border-b-2 border-slate-500"></div>
            </div>
            <div
              v-motion-slide-visible-bottom
              class="text-base w-full text-gray-400"
            >
              <p v-motion-slide-visible-bottom>
                Merhaba, ben Yusuf Karaca. Burada fikirlerim ve hobilerim
                hakkımda bilgi sahibi olabilirsiniz. 2020 yılından beri
                programlama ve bilgisayarlara ilgi duyuyorum. Web sunucuları,
                web dizaynı, kernel ve yazılım geliştirme ile ilgileniyorum.
              </p>
              <p class="mt-3" v-motion-slide-visible-bottom>
                Bunun dışında dilbilimine, işletim sistemlerine ve Japoncaya
                ilgim var (halen konuşamıyorum). Şu anda bilgisayar mühendisliği
                üzerine okuyorum ve freelancer olarak çalışıyorum. İşiniz için
                yeni çözümler üretebilir ve sizin için websiteler
                tasarlayabilirim.
              </p>
              <p class="mt-3" v-motion-slide-visible-bottom>
                İşte kullandığım ve iyi bildiğim bazı teknolojiler.
              </p>
              <div class="w-full flex flex-wrap mt-7">
                <div class="w-4/5 flex flex-wrap gap-y-3">
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    Nuxt 3
                  </div>
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    Vue 3
                  </div>
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    JavaScript
                  </div>
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    Node.js
                  </div>
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    Express.js
                  </div>
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    Rust
                  </div>
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    Actix-web
                  </div>
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    Yew.rs
                  </div>
                  <div
                    v-motion-slide-visible-bottom
                    class="triangle w-1/2 flex justify-center cursor-pointer graident"
                    style="transition: height ease-in-out 1200s"
                  >
                    <p class="flex max-w-fit flex-col justify-center link-0">
                      Maria.rs
                    </p>
                  </div>
                  <div v-motion-slide-visible-bottom class="triangle w-1/2">
                    Kernel Development
                  </div>
                </div>
                <div class="w-full h-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ****************************** -->
      <div class="flex items-center flex-shrink flex-wrap gap-3">
        <div v-motion-slide-visible-bottom class="flex-grow ml-5">
          <div class="w-full border-b-2 border-slate-500"></div>
        </div>
        <div
          v-motion-slide-visible-bottom
          class="text-4xl main-text-color font-yolk"
        >
          Bildiğim diğer teknolojiler
        </div>
        <div v-motion-slide-visible-bottom class="flex-grow mr-5">
          <div class="w-full border-b-2 border-slate-500"></div>
        </div>
      </div>

      <!-- <Section delay="400">
        <h2 class="text-rose-400">
          <span class="">Bildiğim diğer </span>Teknolojiler
        </h2>
        <div
          class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
        >
          <h1>Javascript.</h1>
          <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
            <li>Modern ES6. Javascript Frameworkleri</li>
            <li>Vue, React, Svelte</li>
            <li>React js.</li>
            <li>Nodejs (ExpressJs,Fastify, Koajs).</li>
          </ul>
        </div>
      </Section>
      <Section delay="500">
        <div
          class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
        >
          <Section delay="500"> </Section>
          <h1 class="">Rust - Web ve Sistem Programlama.</h1>

          <p class="font-normal text-[1rem] md:text-[1.2rem]">
            Bu aralar xfxOS isminde bir işletim sistemi üzerinde çalışıyorum,
            Bunun hakkında ayrı bir gönderi açacağım.

            <a
              class="underline text-red-400"
              href="https://github.com/xfxpositions/xfxOS/"
              >Daha fazla detay için.</a
            >
          </p>
          <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
            <li>
              Rust web technologies, yew.rs wasm, web frameworks.
              <a
                href="https://github.com/xfxpositions/jsonwebtokens/blob/master/examples/hmac_sign_and_verify.rs"
                class="underline text-red-400"
                >Rust ile yazdığım ilk şey.</a
              >
              <br />
              <a
                href="https://xfxpositions.github.io/yew-basics/"
                class="underline text-red-400"
                >Yew.rs temelleri.</a
              >
              <br />
            </li>

            <li>
              ExpressJs'den ilham alan bir rust web framework'ü yazıyorum,
              ExpressJs kullananlar bile hızlıca adapte olabilecekler.

              <a
                href="https://github.com/xfxpositions/maria"
                class="font-semibold underline"
                >Maria.rs</a
              >'i kontrol edin!
            </li>
          </ul>
        </div>
      </Section>

      <div
        class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
      >
        <h1>Devops.</h1>
        <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
          <li>Basit Devops.</li>
          <li>Ubuntu sunucular. Aws, Oracle Cloud</li>
          <li>
            Imap, Smtp, Http çalışma mantığı, websockets, internet protokolleri
            (belki).
          </li>
          <li>Cyberpanel, Cpanel.</li>
        </ul>
      </div>
      <div
        class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
      >
        <h1>Blockchain.</h1>
        <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
          <li>Blockchain's çalışma mantığı.</li>
          <li>
            Kriptovarlıklar, (ileride bekircoini rust ile baştan yazmak ve
            büyütmek istiyorum, çalışan gerçek bir blockzinciri)
          </li>
          <li>Basit seviye algoritmalar.</li>
          <a href="https://github.com/bekircoin" class="text-red-400 underline"
            >Bekircoin'i kontrol edin!</a
          >
        </ul>
      </div>
      <h2 class="text-rose-400 text-ellipsis">Projelerim.</h2>
      <div
        class="flex flex-col px-6 py-2 md:p-7 md:py-3 lg:p-10 lg:py-3 bg-zinc-500 bg-opacity-30 backdrop-blur-[2px] rounded-md mt-2"
      >
        <h1 class="underline text-rose-400">Bitigin.org</h1>
        <ul class="list-disc font-normal text-[1rem] md:text-[1.2rem]">
          <li>Blockchain's çalışma mantığı.</li>
          <li>
            Kriptovarlıklar, (ileride bekircoini rust ile baştan yazmak ve
            büyütmek istiyorum, çalışan gerçek bir blockzinciri)
          </li>
          <li>Basit seviye algoritmalar.</li>
          <a href="https://github.com/bekircoin" class="text-red-400 underline"
            >Bekircoin'i kontrol edin!</a
          >
        </ul>
      </div> -->

      <hr class="mt-2" />
      <code class="text-sm md:text-[1.2rem]">Yusuf Karaca - 06/05/2023</code>
      <br />
      <a
        href="https://github.com/xfxpositions/my-porftolio"
        class="text-sm text-red-400 underline"
        >Kaynak kodu</a
      >
    </div>
  </div>
</template>
<script setup>
import Section from "../components/Section.vue";
</script>
<style scoped>
.quote-1 {
  height: fit-content;
  font-weight: bold;
  --bg-size: 200%;
  --color-one: rgb(36, 210, 88);
  --color-two: rgb(53, 204, 212);
  background: linear-gradient(
      -45deg,
      var(--color-one),
      var(--color-two),
      var(--color-one)
    )
    0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: move-bg 10s infinite linear;
}

@keyframes move-bg {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: 0 0;
  }
}
.hero-box {
  --bg-opacity: 0.2;
  background: rgba(0, 36, 36, 0.1);
  background: linear-gradient(
    45deg,
    rgba(0, 36, 36, var(--bg-opacity)) 0%,
    rgba(9, 121, 50, var(--bg-opacity)) 35%,
    rgba(0, 255, 188, var(--bg-opacity)) 100%
  );
}

.graident {
  --bg-opacity: 0.2;
  background: rgba(0, 36, 36, 0.1);
  background: linear-gradient(
    45deg,
    rgba(0, 36, 36, 1) 0%,
    rgba(9, 121, 50, 1) 35%,
    rgba(0, 255, 188, 1) 100%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  background-size: 200%;
  -webkit-text-fill-color: transparent;
  animation: graident-animation 5s ease-in infinite;
  transition: all ease-in-out 3s;
}

.link-0::after {
  display: block;
  content: "";
  width: 100%;
  height: 1px;
  background-color: white;
}
.graident:hover {
  background-color: #e91e63;
  color: #fff;
}
@keyframes graident-animation {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
