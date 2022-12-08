<script setup></script>

<template>
  <div class="page">
    <TheHeader />
    <main class="main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.page {
  background: black;
  @apply flex flex-col h-[100vh]  justify-between content-between;
}
.main {
  @apply max-w-[1280px] w-full mx-auto h-full;
  background: center no-repeat url("/img/bg.png");
  background-size: cover;
}
</style>
