<template>
  <div class="slidev-layout items">
    <slot />
    <div class="pt-[10%] grid col-auto">
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
