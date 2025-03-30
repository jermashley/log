<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CardFooter from '@/components/ui/card/CardFooter.vue'
import { useSpotifyNowPlayingQuery } from '@/composables/hooks/spotify'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TrackInfo from './TrackInfo.vue'

const { data } = useSpotifyNowPlayingQuery()
</script>

<template>
  <Card
    class="relative grid w-auto grid-cols-1 grid-rows-[auto,1fr,auto] overflow-hidden bg-transparent shadow-xl"
  >
    <CardHeader>
      <CardTitle class="text-lg">Now Playing</CardTitle>
    </CardHeader>

    <CardContent>
      <div v-if="data">
        <TrackInfo :track="data?.item" />
      </div>

      <div
        v-else
        class="flex h-full flex-col items-center justify-center text-muted-foreground/75"
      >
        <p>😭 Nothing currently playing...for now.</p>
      </div>
    </CardContent>

    <CardFooter>
      <Button
        v-if="data?.item?.external_urls?.spotify"
        variant="default"
        size="sm"
        class="w-full justify-center"
        as-child
      >
        <a :href="data.item.external_urls.spotify" target="_blank">
          <FontAwesomeIcon class="mr-2 text-sm" :icon="faSpotify" fixed-width />

          Listen on Spotify
        </a>
      </Button>
    </CardFooter>

    <div v-if="data?.item?.album?.images[0].url" class="pointer-events-none">
      <img
        :src="data.item.album?.images[0].url"
        class="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full object-cover opacity-20 blur-xl"
      />
    </div>
  </Card>
</template>
