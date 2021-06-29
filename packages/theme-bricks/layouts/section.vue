<template>
  <div class="slidev-layout section-1 grid grid-cols-2">
    <div class="pt-[45%] px-2">
      <slot />
    </div>
    <div class="my-auto pt-[10%]">
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.section-1 {
  background-image: url("../assets/page-3.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @apply grid;

  h1 {
    @apply text-5xl leading-15;
  }

  h2 {
    @apply text-2xl;
  }

  h2 + p {
    @apply -mt-0;
  }
}
</style>
