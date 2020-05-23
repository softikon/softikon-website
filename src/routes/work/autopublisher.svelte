<script context="module">
  export async function preload(page) {
    const res = await this.fetch('https://data.autopublisher.softikon.eu/todd.json')
    const data = await res.json()
    const { app: { currentRelease: { currentReleaseVersion: version, currentReleaseUrl: url } } } = data
    return { version, url }
  }
</script>

<script>
  import WorkHeader from '../../components/WorkHeader.svelte'
  import TransitionWrapper from '../../components/TransitionWrapper.svelte'
  import LineBlock from '../../components/LineBlock.svelte'
  import Button from '../../components/Button.svelte'
  import Slider from '../../components/Slider.svelte'

  export let version
  export let url
</script>

<TransitionWrapper>
  <article>
    <section class="flex">
      <WorkHeader background="#0f041b" image="img/autopublisher-mock.png">
        <span class="text-white lowercase text-4xl" slot="sub">Autopublisher.</span>
        <div slot="title">
          <p>Autopublisher je specializovaný software pro prodejce vozidel, který kombinuje to nejlepší z přehledné agendy, moderních technologií a automatizace části podnikání. Největší devízou systému je plně automatické hromadné vkládání a mazání nabídky na největší inzertní servery u nás - <strong><u>bazos.cz</u></strong> a <strong><u>sbazar.cz</u></strong>.</p>
        </div>
        <ul slot="labels" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
          <li>Nápad, implementace</li>
          <li>Multiplatformní aplikace</li>
        </ul>
        <div>
          <p class="mb-16 leading-loose text-gray-700 text-2xl" style="max-width: 400px; text-rendering: optimizeLegibility;">Aktuální verze ~ {version}</p>
        </div>
      </WorkHeader>
    </section>

    <section>
      <div class="py-48 flex w-10/12 lg:w-10/12 mx-auto flex-col">
        <LineBlock data-aos="fade-up">
          <div class="text-2xl font-semibold uppercase text-gray-500">Softikon hrdě představuje</div>
          <p class="mt-12 mb-24 leading-relaxed text-4xl md:text-6xl">Autopublisher. Software, díky kterému naši klienti z řad prodejců vozidel jednoduše <strong>získají tísíce potenciálních kupujících a ušetří přitom stovky hodin práce</strong> jinak strávených ručním zveřejňováním inzerce.</p>
          <Button href={url}>Stáhnout pro Windows</Button>
        </LineBlock>
      </div>    
    </section>
    
    <section class="overflow-hidden bg-gray-200">
      <div class="w-full lg:w-10/12 mx-auto py-48">
        <LineBlock class="mb-24 w-10/12 lg:w-full mx-auto" data-aos="fade-up">
          <div class="text-2xl font-semibold uppercase text-gray-700">Screenshoty / ukázka programu</div>
        </LineBlock>
        <Slider>
          <img draggable="false" src="img/autopublisher/dashboard-unauthorized.png" alt="" />
          <img draggable="false" src="img/autopublisher/login.png" alt="" />
          <img draggable="false" src="img/autopublisher/dashboard.png" alt="" />
          <img draggable="false" src="img/autopublisher/list.png" alt="" />
          <img draggable="false" src="img/autopublisher/edit-profile.png" alt="" />
          <img draggable="false" src="img/autopublisher/settings-text.png" alt="" />
          <img draggable="false" src="img/autopublisher/control.png" alt="" />
          <img draggable="false" src="img/autopublisher/bulk-publish.png" alt="" />
          <img draggable="false" src="img/autopublisher/advanced-removal-1.png" alt="" />
        </Slider>
      </div>
    </section>
  </article>
</TransitionWrapper>

<style>
  img {
    max-width: 85vw;
    margin-right: 3rem;
    width: 100%;
    height: 100%;
  }

  @media(min-width: 1024px) {
    img {
      max-width: 70vw;
    }
  }
</style>