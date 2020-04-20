<script>
  export let background = 'https://digitalbro.net/wp-content/uploads/2020/02/THUMB-BLUE@2x.jpg'
  export let mode = 'light'
</script>

<div class="card card--{mode} flex flex-col">
  <div class="card-wrap" style="background-image: url({background})">
    <div class="card-overlay"></div>
    <div class="card-inner">
      <div class="card__sub"><slot name="sub"></slot></div>
      <div class="card__title"><slot name="title"></slot></div>

      <slot></slot>
    </div>
  </div>
</div>

<style>
  .card {
    min-height: 1px;
    box-sizing: border-box;
    transition: all 0.5s;
  }

  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: transparent;
  }

  .card--light .card-overlay {
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 82%);
  }

  .card--dark .card-overlay {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 82%);
  }

  .card:hover {
    padding: 1rem;
  }

  .card-wrap {
    overflow: hidden;
    position: relative;
    flex-grow: 1;
    width: 100%;
    background-size: cover;  
  }

  .card-inner {
    position: relative;
    padding-top: 65%;
    padding-bottom: 15%;
  }

  .card__sub {
    padding: 5%;
    padding-top: 0;
    color: #585858;
    font-weight: 600;
    font-size: 1.8rem;
  }

  .card__title {
    padding-left: 5%;
    padding-right: 5%;
    font-weight: 700;
    font-size: 2.4rem;
  }

  :global(.card__link) {
    display: inline-block;
    margin-top: 10%;
    margin-left: 5%;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .card--dark :global(.card__link) {
    border-color: #fff;
    color: #fff;
  }

  .card--dark .card__title {
    color: #fff;
  }
</style>