<script setup lang="ts">
import Background from '../assets/page-13.vue'
</script>

<template>
  <div class="slidev-layout default-7 dark">
    <div class="pr-[25%] py-[2%]">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.slidev-layout.default-7 {
  color: #EBEEF2;
}
</style>
