<script setup>
import NowPlayingCard from '@/components/feature/spotify/NowPlayingCard.vue'
import RecentlyPlayedCard from '@/components/feature/spotify/RecentlyPlayedCard.vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <h1 class="mb-4 text-3xl font-bold">Musica</h1>

    <section class="grid grid-cols-2 gap-4">
      <NowPlayingCard />

      <RecentlyPlayedCard />
    </section>
  </DefaultLayout>
</template>
