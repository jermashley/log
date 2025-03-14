<script setup>
//
</script>

<template>
    <div>
        <code v-if="nowPlaying">
    <pre>
        {{ JSON.stringify(nowPlaying, null, 2) }}
    </pre>
</code>
    </div>
</template>
