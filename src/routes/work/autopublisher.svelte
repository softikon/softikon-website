<script>
  import WorkHeader from '../../components/WorkHeader.svelte'
</script>

<article>
  <section class="flex">  
    <WorkHeader background="#0f041b" image="img/autopublisher-mock.png">
      <span class="text-white" slot="sub">Autopublisher</span>
      <span slot="title">Specializovaný software pro autobazary, který šetří čas a peníze.</span>
      <a class="text-3xl text-white font-bold underline" href="autopublisher/">Přejít na web</a>
      <ul slot="labels">
        <li>Idea, Direction</li>
        <li>Electron App + Website</li>      
      </ul>
    </WorkHeader>
  </section>
</article>