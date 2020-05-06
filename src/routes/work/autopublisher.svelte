<script>
  import WorkHeader from '../../components/WorkHeader.svelte'
</script>

<article>
  <section class="flex">
    <WorkHeader background="#0f041b" image="img/autopublisher-mock.png">
      <span class="text-white alternative-font text-4xl" slot="sub">Autopublisher</span>
      <div slot="title">
        <p>Autopublisher je specializovaný software pro prodejce vozidel, který kombinuje to nejlepší z přehledné agendy, moderních technologií a automatizace části podnikání. Největší devízou systému je plně automatické hromadné vkládání a mazání nabídky na největší inzertní servery u nás - <strong><u>bazos.cz</u></strong> a <strong><u>sbazar.cz</u></strong>.</p>
      </div>
      <ul slot="labels" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
        <li>Nápad, implementace</li>
        <li>Multiplatformní aplikace</li>
      </ul>
    </WorkHeader>
  </section>
</article>