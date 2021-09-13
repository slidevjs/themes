<script setup lang="ts">
import Background from '../assets/page-5.vue'

const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout default-3 dark">
    <div class="px-[8%] py-[2%]" :class="props.class">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.slidev-layout.default-3 {
  color: #EBEEF2;
}
</style>
