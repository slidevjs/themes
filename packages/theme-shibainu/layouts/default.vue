<script setup lang="ts">
import Background from '../assets/page-6.vue'
</script>

<template>
  <div class="slidev-layout default-1">
    <div class="w-[70%]">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.slidev-layout.default-1 {
  color: #EBEEF2;
}
</style>
