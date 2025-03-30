<script setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import Navbar from './Navigation/Navbar.vue'
</script>

<template>
  <div class="grid min-h-screen grid-cols-1 grid-rows-[auto,1fr] gap-y-8">
    <Navbar />

    <main class="mx-auto w-full max-w-3xl">
      <slot />
    </main>
  </div>

  <VueQueryDevtools />
</template>
