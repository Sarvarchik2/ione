<template>
  <teleport to="body">
    <IntroOverlay />
  </teleport>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import './app.css';
</style>

<script setup lang="ts">
import IntroOverlay from '@/components/ui/IntroOverlay.vue'
</script>
