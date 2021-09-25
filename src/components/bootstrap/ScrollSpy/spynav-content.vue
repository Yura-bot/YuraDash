<template>
    <component :is="tag" :class="`nav ${className}`">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'spynav-content',
  props: {
    tag: { type: String, default: 'ul' },
    className: { type: String, default: '' }
  }
}
</script>
