<script>
  import { isHeaderInverted } from '../store/ui'

  export let active = false
</script>

<div class="burger-bar relative" class:active class:invert={$isHeaderInverted && !active}>
  <span class="burger-bar-1 absolute top-0"></span>
  <span class="burger-bar-2 absolute" style="top: calc(50% - 0.2rem);"></span>
  <span class="burger-bar-3 absolute bottom-0"></span>
</div>

<style>
  .burger-bar {
    transition: filter .4s;
    width: 3rem;
    height: 2rem;
  }

  .burger-bar > span {
    display: block;
    height: 0.3rem;
    background-color: black;
    left: 0;
    right: 0;
    transition: all .5s;
    transform-origin: 50% 50%;
    transform: translateY(0) rotate(0);
  }

  .burger-bar .burger-bar-2 {
    left: 0;
  } 

  .burger-bar.active > span {
    background-color: #fff;
  }

  .active .burger-bar-1 {
    transform: translateY(-50%) rotate(45deg);
    top: 50%;
  }

  .active .burger-bar-2 {
    transform: scale(0);
  }  

  .active .burger-bar-3 {
    transform: translateY(50%) rotate(-45deg);
    bottom: 50%;
  }
</style>