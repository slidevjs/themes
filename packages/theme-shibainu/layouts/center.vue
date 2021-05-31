<script setup lang="ts">
import Background from '../assets/page-2.vue'
</script>

<template>
  <div class="slidev-layout center grid">
    <div class="m-auto w-[60%] text-center">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>
