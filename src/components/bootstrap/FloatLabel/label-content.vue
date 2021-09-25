<template>
    <component :is="labelTag" :class="labelClass" :for="forLabel">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'label-content',
  props: {
    labelTag: { type: String, default: 'label' },
    labelClass: { type: String, default: '' },
    forLabel: { type: String, default: '' }
  }
}
</script>
