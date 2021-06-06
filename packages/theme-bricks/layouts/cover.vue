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
}
</style>
