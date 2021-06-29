<script setup lang="ts">
import Background from '../assets/page-15.vue'
</script>

<template>
  <div class="slidev-layout quote dark">
    <div class="my-auto w-full text-center">
      <slot />
    </div>
    <Background class="layout-background" />
  </div>
</template>

<style lang="postcss">
.slidev-layout.quote {
  color: #EBEEF2;

  h1 {
    font-size: 4em;
  }
}
</style>
