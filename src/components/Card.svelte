<script>
  export let background = '#1d2b2a'
  export let image = 'https://digitalbro.net/wp-content/uploads/2020/02/THUMB-BLUE@2x.jpg'
  export let to
</script>
<div class="card flex flex-col align-end justify-end">
  <a href="{to}" class="card__link">
    <div
      class="card__bg-container"
      style="background-color: {background};"
    ></div>
    <div class="card__sub text-gray-200">
      <slot name="sub"></slot>
    </div>
    <div class="card__title text-gray-500 leading-relaxed">
      <slot name="title"></slot>
    </div>
    <div class="card__more hidden md:block">
      <slot></slot>
    </div>
    <img class="card__img" src="{image}" alt="" />
  </a>
</div>

<style>
  .card {
    height: 74rem;
    clip-path: inset(0 0 0 0);
  }

  .card__link {
    height: 62rem;
    position: relative;
    display: block;
  }

  .card__bg-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translateX(-50%) translateY(-50%);
    clip-path: inset(calc(((100vh - 62rem) / 2)) 5% calc(((100vh - 52rem) / 2)) 5%);
  }

  .card__sub {
    position: absolute;
    top: 85px;
    left: 15%;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .card__title {
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translateY(calc(-50% - 6rem));
    font-weight: 400;
    font-size: 2rem;
    max-width: calc(100vw - 30%);
    @apply tracking-tight;    
  }

  .card__img {
    position: absolute;
    max-width: 85vw;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .card__more {
    position: absolute;
    bottom: 9rem;
    left: 85px;   
  }

  @media(min-width: 768px) {
    .card__sub, .card__title {
      left: 85px;
      max-width: calc(100vw - 60%);
    }

    .card__img {
      right: 0;
      left: 45%;
      transform: unset;
      bottom: -2rem;
    }

    .card__title {
      top: 50%;
      transform: translateY(calc(-50% - 5rem));
      font-size: 2rem;
    }
  }

  @media(min-width: 1024px) {
    .card {
      height: 74rem;
    }

    .card__link {
      height: 62rem;
    }
    .card__bg-container {
      clip-path: inset(calc(((100vh - 62rem) / 2)) 200px calc(((100vh - 42rem) / 2)) 0);    
    }

    .card__sub {
      top: 85px;
      left: 85px;
      font-weight: 500;
      font-size: 1.5rem;
    }

    .card__title {
      left: 85px;
      top: 50%;
      transform: translateY(calc(-50% - 5rem));
      font-size: 2.4rem;
      max-width: 420px;
    }

    .card__img {
      transform: unset;
      max-height: 49rem;
      max-width: 70rem;
      bottom: 0;
      right: 0;
      left: unset;
      top: unset;
    }
  }

  @media(min-width: 1280px) {

  }
</style>