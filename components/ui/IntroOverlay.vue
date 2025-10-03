<template>
  <div v-if="visible" class="intro-overlay">
    <img class="intro-logo" src="@/assets/ione.svg" alt="IONE" @animationend="onAnimationEnd" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

const visible = ref(false)
let hideTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  try {
    if (import.meta.dev) {
      visible.value = true
    } else {
      const played = sessionStorage.getItem('introPlayed')
      if (!played) visible.value = true
    }
  } catch (_) {
    // sessionStorage might be blocked; still show once
    visible.value = true
  }
  if (visible.value) {
    if (hideTimer) clearTimeout(hideTimer)
    hideTimer = setTimeout(() => { visible.value = false }, 2100)
  }
})

watch(visible, (v) => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = v ? 'hidden' : ''
  }
})

function onAnimationEnd(e: AnimationEvent) {
  if ((e.target as HTMLElement)?.classList.contains('intro-logo')) {
    visible.value = false
    try { sessionStorage.setItem('introPlayed', '1') } catch (_) {}
  }
}

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = ''
  }
  if (hideTimer) clearTimeout(hideTimer)
})
</script>

<style scoped>
.intro-overlay {
  position: fixed;
  inset: 0;
  background: #0f0f10; /* тёмный фон */
  display: grid;
  place-items: center;
  z-index: 9999;
  pointer-events: all;
}
.intro-logo {
  width: min(260px, 50vw);
  opacity: 0;
  animation: intro-pop 2s ease forwards;
}

@keyframes intro-pop {
  0% { opacity: 0; transform: scale(0.6); filter: blur(8px); }
  30% { opacity: 1; transform: scale(1.02); filter: blur(0); }
  60% { opacity: 1; transform: scale(1.0); }
  100% { opacity: 0; transform: scale(0.98); }
}
</style>
