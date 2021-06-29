<script setup lang="ts">
import Background from '../assets/page-9.vue'
</script>

<template>
  <div class="slidev-layout default-4 dark">
    <div class="pl-[20%] py-[2%]">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.slidev-layout.default-4 {
  color: #EBEEF2;
}
</style>
