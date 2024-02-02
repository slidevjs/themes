<script setup lang="ts">
const props = defineProps({
  cols: {
    default: 4,
    type: Number,
  },
})
</script>

<template>
  <div class="slidev-layout items">
    <slot />
    <div class="pt-[5%] grid px-10" :style="`grid-template-columns: repeat(${props.cols}, 1fr);`">
      <slot name="items" />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.items {
  background-image: url("../assets/page-6.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @apply text-center py-15;

  h1 {
    @apply text-5xl leading-15;
  }
}
</style>
