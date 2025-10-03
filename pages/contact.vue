<template>
  <div class="contact">
    <Contact/>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'
useSeo({
  title: 'Контакты',
  description: 'Свяжитесь с IONE: оставьте заявку или позвоните нам — обсудим ваш проект и предложим решение.',
  canonicalPath: '/contact'
})
</script>