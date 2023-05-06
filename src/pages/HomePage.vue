<template>
  <div class="grid justify-center align-center flex-col">
    <div class="z-10">
      <Section delay="100">
        <div
          class="text-xl p-2 backdrop-blur-[2px] bg-zinc-400 m-auto rounded-lg bg-opacity-20"
        >
          Merhaba! Ben Yusuf Karaca. hobilerim, ilgi alanlarım ve fikirlerim
          hakkında gönderiler paylaşıyorum.
        </div>
      </Section>
      <Section delay="200">
        <h1>Hakkımda</h1>
        <h2 class="font-normal">
          Şu anlık hakkımda bilinmesi gereken çok şey yok, 17 yaşındayım, liseye
          gidiyorum ve
          <span class="graident"> bir şeyler</span> deniyorum...
        </h2>
      </Section>

      <div class="px-10 py-1 md:py-2">
        <hr />
      </div>
      <Section delay="300">
        <h2 class="text-rose-400 text-ellipsis">Sevdiğim şeyler.</h2>
        <div class="font-normal">
          İşletim sistemleri (arch linux kullanıyorum bu arada), Dilbilimi
          (Altay dil ailesi?), Bilgisayar bilimi
        </div>
        <div class="px-10 py-4">
          <hr />
        </div>
      </Section>
      <Section delay="400">
        <h2 class="text-rose-400">
          <span class="">Bildiğim </span>Teknolojiler
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
