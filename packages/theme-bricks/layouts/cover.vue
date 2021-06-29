<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.cover {
  background-image: url("../assets/page-1.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @apply font-serif grid;

  h1 {
    @apply text-6xl leading-20;
  }

  h1 + p {
    @apply text-2xl -mt-6;
  }
}
</style>
