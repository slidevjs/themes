<script setup lang="ts">
import Background from '../assets/page-12.vue'
</script>

<template>
  <div class="slidev-layout default-6 dark">
    <div class="px-[15%] py-[5%]">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.slidev-layout.default-6 {
  color: #EBEEF2;
}
</style>
