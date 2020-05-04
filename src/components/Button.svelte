<script>
  const defaultClasses = [
    'inline-block',
    'border',
    'border-current',
    'px-12',
    'py-6',
    'font-semibold',
    'text-2xl'
  ]

  let classes
  let className = $$restProps['class'] || ''

  $: classes = [...new Set([...defaultClasses, ...className.split(' ')])].join(' ')
</script>

<a rel="prefetch" href="/#" {...$$restProps} class="{classes}">
  <slot></slot>
</a>