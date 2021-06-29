<script setup lang="ts">
import Background from '../assets/page-7.vue'
</script>

<template>
  <div class="slidev-layout section section-2 grid">
    <div class="my-auto px-10 w-full">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>
