<script setup lang="ts">
import Background from '../assets/page-4.vue'
</script>

<template>
  <div class="slidev-layout default-2">
    <div class="w-[80%]">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.slidev-layout.default-2 {
  color: #EBEEF2;
}
</style>
