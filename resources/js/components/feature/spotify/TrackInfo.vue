<script setup>
defineProps({
  track: {
    type: Object,
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
})
</script>

<template>
  <div
    class="grid grid-cols-[auto,1fr] grid-rows-2 items-center gap-x-4 gap-y-0 md:grid-rows-1"
  >
    <img
      :src="track.album.images[0].url"
      alt="Album Cover"
      class="col-start-1 col-end-2 row-start-1 row-end-3 rounded-lg border border-muted object-cover"
      :class="{
        'h-16 w-16': size === 'small',
        'h-32 w-32': size === 'medium',
        'h-48 w-48': size === 'large',
      }"
    />

    <div
      class="col-start-2 col-end-3 row-start-1 row-end-3 flex flex-col items-start justify-center self-center"
    >
      <a
        :href="track.external_urls.spotify"
        target="_blank"
        class="border-b border-b-muted-foreground/0 text-base font-semibold leading-tight text-foreground/75 transition-all duration-300 ease-in-out hover:border-b-muted-foreground/100 hover:text-foreground/100"
      >
        {{ track.name }}
      </a>

      <div class="flex flex-row flex-wrap">
        <p
          v-for="(artist, index) in track.artists"
          :key="index"
          class="text-sm font-medium"
        >
          <a
            class="border-b border-b-muted-foreground/0 text-muted-foreground/75 transition-all duration-300 ease-in-out hover:border-b-muted-foreground/100 hover:text-muted-foreground/100"
            :href="artist.external_urls.spotify"
            target="_blank"
          >
            {{ artist.name }}
          </a>

          <span>
            {{ index < track.artists.length - 1 ? `,&nbsp` : `` }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
