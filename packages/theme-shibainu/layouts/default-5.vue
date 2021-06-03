<script setup lang="ts">
import Background from '../assets/page-10.vue'
</script>

<template>
  <div class="slidev-layout default-5 dark">
    <div class="pr-[10%] py-[2%]">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style scoped>
.slidev-layout.default-5 {
  color: #EBEEF2;
}
</style>
