<script>
  export let active = false
</script>

<div class="burger-bar relative" class:active>
  <span class="burger-bar-1 absolute top-0"></span>
  <span class="burger-bar-2 absolute bottom-0"></span>
</div>

<style>
  .burger-bar {
    margin-top: 1rem;
    width: 4rem;
    height: 2rem;
  }

  .burger-bar > span {
    display: block;
    height: 0.4rem;
    background-color: black;
    left: 0;
    right: 0;
    transition: all .5s;
    transform-origin: 50% 50%;
    transform: translateY(0) rotate(0);
  }

  .burger-bar.active > span {
    background-color: #fff;
  }

  .active .burger-bar-1 {
    transform: translateY(-50%) rotate(45deg);
    top: 50%;
  }

  .active .burger-bar-2 {
    transform: translateY(50%) rotate(-45deg);
    bottom: 50%;
  }
</style>