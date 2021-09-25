<template>
    <component :is="tag" :class="className">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'label',
  props: {
    tag: { type: String, default: 'div' },
    className: { type: String, default: '' }
  }
}
</script>
