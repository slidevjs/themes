<template>
  <div class="slidev-layout intro">
    <div>
      <slot name="left" />
    </div>
    <div class="h-full grid">
      <div class="my-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.slidev-layout.intro {
  background-image: url("../assets/page-8.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @apply text-center py-15 grid grid-cols-[3fr,4fr];

  h1 {
    @apply text-7xl leading-20;
  }
}
</style>
