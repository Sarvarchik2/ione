<template>
  <div v-show="visible" class="route-overlay" aria-hidden="true">
    <img class="route-logo" src="@/assets/ione.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const visible = ref(false)
let hideTimer: ReturnType<typeof setTimeout> | null = null
let removeBefore: (() => void) | null = null
let removeAfter: (() => void) | null = null

onMounted(() => {
  const router = useRouter()
  let first = true

  removeBefore = router.beforeEach((_to, _from, next) => {
    if (!first) {
      visible.value = true
    }
    first = false
    next()
  })
  removeAfter = router.afterEach(() => {
    if (hideTimer) clearTimeout(hideTimer)
    hideTimer = setTimeout(() => { visible.value = false }, 2000)
  })
})

watch(visible, (v) => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = v ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (removeBefore) removeBefore()
  if (removeAfter) removeAfter()
  if (hideTimer) clearTimeout(hideTimer)
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = ''
  }
})
</script>

<style scoped>
.route-overlay{
  position: fixed;
  inset: 0;
  background: #0f0f10;
  display: grid;
  place-items: center;
  z-index: 9998;
  pointer-events: all;
}
.route-logo{
  width: 120px;
  opacity: 0;
  animation: route-pop 2s ease forwards;
}

@keyframes route-pop{
  0% { opacity: 0; transform: scale(0.9); filter: blur(6px); }
  50%{ opacity: 1; transform: scale(1.0); filter: blur(0); }
  100%{ opacity: 0; transform: scale(1.04); }
}
</style>
