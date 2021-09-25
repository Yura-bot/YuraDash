<template>
    <component :is="contentTag" :class="inputClass" :type="type" :id="id" :aria-describedby="ariaDescribedby" :name="name" :placeholder="Placeholder">
        <slot/>
    </component>
</template>
<script>
export default {
  name: 'label-input',
  props: {
    contentTag: { type: String, default: 'input' },
    inputClass: { type: String, default: '' },
    type: { type: String, default: '' },
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    ariaDescribedby: { type: String, default: '' },
    Placeholder: { type: String, default: '' }
  }
}
</script>
