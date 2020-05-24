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
    display: inline-block;
    font-weight: 600;
  }

  .btn.primary {
    color: crimson;
  }

  .btn :global(a) {
    padding: 0.1rem 0;
  }

  .btn:hover:before {
    padding-right: 1.75rem;
    padding-left: 2.25rem;
  }

  .btn:before {
    font-size: 1.5em;
    content: '→';
    padding-right: 3rem;
    color: inherit;
    transition: padding .45s ease;
  }
</style>