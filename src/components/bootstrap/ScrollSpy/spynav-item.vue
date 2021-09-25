<template>
    <component :is="tag" :class="`nav-item ${className}`">
        <component :is="innerTag" :class="innerClass" :href="Link">
            <slot/>
        </component>
    </component>
</template>
<script>
export default {
  name: 'spynav-content',
  props: {
    tag: { type: String, default: 'li' },
    className: { type: String, default: '' },
    innerTag: { type: String, default: 'a' },
    innerClass: { type: String, default: '' },
    Link: { type: String, default: '' }
  }
}
</script>
