<template>
  <div
    class="md-wrapper text-lg text-left bg-slate-900 p-5 lg:px-44 box-border rounded-md backdrop-blur-[2px] bg-opacity-10"
  >
    <Markdown html="true" :source="src" />
  </div>
</template>
<script setup>
import Markdown from "vue3-markdown-it";
import { ref } from "vue";
let string = `Günümüzde Türklere ne oldu, nasıl oldu da Animist, Şamanist, doğaya tapınan bozkır kültürü ve Eski Türk tiplemesi at binen, ok atan, çekik gözlü ve ince bıyıklı Asya Irkına ne oldu da Müslüman Romalılara döndü? Bu yazımda bunlara değineceğim.

Ön (proto) Türkler, yaşayış tarzları ve çevresel etmenler gibi çeşitli sebeplerden, en büyük olarak da yerleşik hayata geçmediklerinden dolayı halen ilkel, doğaya tapan inanışlara sahiplerdi. Hiungnuların dağılmasından sonra Ting-Lingler ve diğer Türk kavimleri batıya, Mavenaünehr'e kadar yayılmaya başladı. Batıya toplanan Türk kavimlerine daha sonrasında Oğuzlar denmeye başladı ve daha sonrasında Selçuklulak ve Osmanlıların kökeni olan Oğuz Yagbu devletini kurdular. Göktürk Kağanlığı döneminde Emevilerin İrani *cihad* amacı ile ele geçirmelerinden sonra Emeviler Türkler ile türlü savaşlar yaptılar [Müslümanların Maveraünnehir'i fethi - Vikipedi (wikipedia.org)](https://tr.wikipedia.org/wiki/M%C3%BCsl%C3%BCmanlar%C4%B1n_Mavera%C3%BCnnehir%27i_fethi). Türkler bu savaşlardan sonra 8. ve 9. yüzyıllarda Oğuzlar kitleler halinde Müslüman olmaya, daha doğrusu olmak zorunda bırakılarak Müslüman olmaya başladılar. 

Müslümanlıkta milliyetçilik yerine *Ümmet* anlayışı olduğu için Oğuzlar yavaş yavaş milliyetçilik anlayışından vazgeçti, önceki atalarını *putperest* olarak suçladı, tarihini ve töresini unuttu. Arapların dininin yanında dilini ve sonrasında da kültürünü benimsemeye, deyimi yerindeyse *Araplaşmaya* başladı. Bunu en çok Osmanlı döneminde görebiliriz. Bunun dışında Osmanlı çok uluslu bir devletti, yabancı annelerden gelen Sultanlar, devşirme ile başa geçen devlet adamları ve Osmanlının fetih odaklı olması sebebi ile Osmanlı içerisindeki Türk nufüsunun azalması ile Osmanlı milliyetçiliğini yitirdi, hatta Türk deyimi bir hakaret olarak algılandı, yuhalandı. Kaldı ki zaten *Ümmet* ve *Cihad* ile Milliyetçilik kavramları bir arada bulunamazdı. Bu sebep ile Osmanlılar her ne kadar kendilerini Türk olarak kabul etse de, ne kadar Türk olduğu oldukça tartışılır. 

Günümüzde Oğuz Türkleri ırksal olarak Romalı (Anadolu yerlisi), Yunan, İtalyan, Kafkas ve Orta Doğu genetiğine sahiptir. E birde Şamanist Bozkır Kültürü de etkisini yitirince günümüzde Oğuz Türkleri (Türkiye) ciddi manada Romalı Müslümanlar olmuşlar, Ulu Önder Mustafa Kemal Atatürk'ün çalışmaları olmasa şu an Türk isminin bile sadece isim olarak kalacağı çözülemez bir duruma giricekti. 

Irksal olarak Orta Asya genetiğine sahip olmamıza gerek yok, çünkü Türk Ulusu zaten ırksal olarak değil, aynı amaç doğrultusunda birleşen Boy (kabile) Konfederasyonlarından gelir. Tengri Türkü korusun, yüceltsin, umarım aynı hataları tekrarlamaz ve tekrardan bu kültürel yozlaşmayı hep birlikte kırar, Türklüğü yeniden canlandırırız.

27/03/2023 - yusufkaraca.dev`;
let src = ref(string);
</script>
<style>
.md-wrapper a {
  text-decoration: underline;
  color: rgb(251, 113, 133);
}
</style>
