<script setup>
import NowPlayingCard from '@/components/feature/spotify/NowPlayingCard.vue'
import RecentlyPlayedCard from '@/components/feature/spotify/RecentlyPlayedCard.vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <NowPlayingCard />

      <RecentlyPlayedCard />
    </section>
  </DefaultLayout>
</template>
