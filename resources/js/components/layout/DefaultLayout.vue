<script setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <main class="mx-auto w-full max-w-3xl">
    <slot />
  </main>

  <VueQueryDevtools />
</template>
