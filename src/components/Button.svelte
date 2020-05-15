<script>
  import Link from './Link.svelte'

  const defaultClasses = [
    'text-3xl',
  ]

  let classes
  let className = $$restProps['class'] || ''

  $: classes = [...new Set([...defaultClasses, ...className.split(' ')])].join(' ')
</script>

<div class:btn={true} class="{classes}">
  <Link {...$$restProps}>
    <slot></slot>
  </Link>
</div>

<style>
  .btn {
    color: crimson;
    display: inline-block;
    font-weight: 600;
  }

  .btn :global(a) {
    border-bottom: 1px solid;
    padding: 0.1rem 0;
  }

  .btn:after {
    content: '→';
    font: inherit;
    padding-left: 2rem;
    color: inherit;
    animation: move 3s linear infinite;
  }

  @keyframes move {
    from {
      padding-left: 2rem;
    }
    50% {
      padding-left: 1rem;
    }
    to {
      padding-left: 2rem;
    }
  }
</style>