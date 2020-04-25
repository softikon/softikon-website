<script>
  const defaultClasses = [
    'border-4',
    'px-8',
    'py-4',
    'font-semibold',
    'text-xl',
    'bg-transparent',
    'rounded'
  ]

  let classes
  let className = $$restProps['class'] || ''

  $: classes = [...new Set([...defaultClasses, ...className.split(' ')])].join(' ')
</script>

<a rel="prefetch" href="/#" {...$$restProps} class="{classes}">
  <slot></slot>
</a>