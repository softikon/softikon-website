<script>
  import WorkHeader from '../../components/WorkHeader.svelte'
</script>

<article>
  <section class="flex">
    <WorkHeader background="#d2dae5" image="img/betsense-mock.png">
      <span slot="sub" class="text-gray-600">Betsense</span>
      <span slot="title" class="text-gray-900">Prémiový realtime hub pro sázkové kanceláře i sázkaře, který se pyšní nejnižší datovou latencí ve svém oboru.</span>
      <div class="text-xl text-gray-500">Spouštíme Q3/2020</div>
      <ul slot="labels" class="text-gray-900" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
        <li>Idea, Direction</li>
        <li>Electron App + Website</li>      
      </ul>
    </WorkHeader>
  </section>
</article>