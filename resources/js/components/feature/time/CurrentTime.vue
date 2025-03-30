<script setup>
import { ref, onMounted } from 'vue'

const currentTime = ref(``)

const updateTime = () => {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${hours}:${minutes}:${seconds}`
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<template>
  {{ currentTime }}
</template>
