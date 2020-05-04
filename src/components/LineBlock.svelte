<script>
  export let sm = false
  export let lg = false
  export let xl = false
  export let dark = false
  export let grey = false
</script>

<div {...$$restProps}>
  <div class="c-line" class:c-line__sm={sm} class:c-line__lg={lg} class:c-line__xl={xl} class:c-line__dark={dark} class:c-line__grey={grey}>
    <span class="c-line-ln hidden lg:block"></span>
    <slot></slot>
  </div>
</div>

<style>
  .c-line {
    position: relative;
  }

  @media (min-width: 1024px) {
    .c-line {
      padding-left: 12rem;
    }
  }

  .c-line-ln {
    position: absolute;
    left: 0;
    width: 8rem;
    height: 1px;
    background-color: rgba(17, 17, 17, 0.6);
    top: 1rem;
  }

  .c-line__sm .c-line-ln {
    top: 0.8rem;
  }

  .c-line__lg .c-line-ln {
    top: 1.35rem;
  }

  .c-line__xl .c-line-ln {
    top: 1.6rem;
  }  

  .c-line__dark .c-line-ln {
    background-color: rgba(255, 255, 255, 0.8);
  }

  .c-line__grey .c-line-ln {
    background-color: rgba(17, 17, 17, 0.35);
  }
</style>
  
