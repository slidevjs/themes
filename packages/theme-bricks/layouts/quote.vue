<template>
  <div class="slidev-layout quote">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.quote {
  background-image: url("../assets/page-5.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @apply text-center py-15 h-full grid;

  h1 {
    @apply text-6xl leading-15;
  }
}
</style>
