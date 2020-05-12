<script>
  const defaultClasses = [
    'inline-block',
    'border',
    'border-current',
    'px-8',
    'lg:px-12',
    'py-4',
    'lg:py-6',
    'font-semibold',
    'text-xl',
    'lg:text-2xl'
  ]

  let classes
  let className = $$restProps['class'] || ''

  $: classes = [...new Set([...defaultClasses, ...className.split(' ')])].join(' ')
</script>

<a rel="prefetch" href="/#" {...$$restProps} class="{classes}">
  <slot></slot>
</a>