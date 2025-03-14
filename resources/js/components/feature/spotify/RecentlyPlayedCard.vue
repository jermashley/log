<script setup>
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useSpotifyRecentTracksQuery } from '@/composables/hooks/spotify'
import TrackInfo from './TrackInfo.vue'
import { Button } from '@/components/ui/button'
import { faListMusic } from '@fortawesome/pro-duotone-svg-icons'

const { data, isLoading } = useSpotifyRecentTracksQuery()
</script>

<template>
  <Card class="grid w-auto grid-cols-1 grid-rows-[auto,1fr,auto] shadow-xl">
    <CardHeader>
      <CardTitle class="text-lg">Recently Played</CardTitle>
    </CardHeader>

    <CardContent>
      <div v-if="isLoading" class="text-gray-500">Loading...</div>

      <div v-else-if="data?.items?.length > 0" class="grid grid-cols-1 gap-4">
        <TrackInfo
          v-for="(item, index) in data.items.slice(0, 2)"
          :key="index"
          :track="item.track"
          size="small"
        />
      </div>

      <div v-else class="text-gray-500">
        😭 No recently played tracks found.
      </div>
    </CardContent>

    <CardFooter>
      <Button variant="default" size="sm" class="w-full justify-center">
        <FontAwesomeIcon class="mr-2 text-sm" :icon="faListMusic" fixed-width />

        See more
      </Button>
    </CardFooter>
  </Card>
</template>
