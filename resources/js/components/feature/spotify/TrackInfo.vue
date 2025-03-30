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
  <div class="flex flex-row items-center justify-start gap-x-4">
    <img
      :src="track.album.images[0].url"
      alt="Album Cover"
      class="rounded-lg border border-muted object-cover"
      :class="{
        'h-16 w-16': size === 'small',
        'h-32 w-32': size === 'medium',
        'h-48 w-48': size === 'large',
      }"
    />

    <div class="">
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
          class="text-xs font-medium"
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
