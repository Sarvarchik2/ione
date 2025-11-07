<template>
  <div class="contact-wrapper">
    <div class="contact-left">
      <h2>Наши контакты</h2>
      <h3>Свяжитесь с нами</h3>
      <p>Для бесплатной консультации просто оставьте заявку на сайте или позвоните нам. Мы поможем определить
        потребности вашего бизнеса и подберем оптимальные варианты</p>
      <div class="contact-left-link">
        <div class="contact-left-link-phone">
          <a href="tel:+998909029898">
            <span>Телефон номер</span>
            +998 90 902 98 98
          </a>
          <a href="tel:+998903580838">
            <span>Телефон номер</span>
           +998 90 358 08 38
          </a>
        </div>

        <a href="mailto:ionemarketinguz@gmail.com">
          <span>Электронная почта</span>
          ionemarketinguz@gmail.com
        </a>
      </div>

      <img class="contact-img" src="@/assets/ione.svg" alt="ione">

    </div>
    <form class="contact-form" @submit.prevent="onSubmit">
      <h2>Форма связи</h2>

      <h3>Давайте обсудим ваш проект</h3>

      <input
        type="text"
        placeholder="Ваше имя*"
        v-model="form.name"
        :class="{ 'input-error': errors.name }"
      >
      <span v-if="errors.name" class="error-text">{{ errors.name }}</span>

      <input
        type="text"
        placeholder="Телефон номер*"
        v-model="form.phone"
        :class="{ 'input-error': errors.phone }"
      >
      <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>

      <textarea
        placeholder="Ваш комментарий"
        v-model="form.comment"
      ></textarea>

      <button type="submit" :disabled="loading">
        <span v-if="loading">Отправка…</span>
        <span v-else>Отправить</span>
      </button>

      <p v-if="notice" :class="['notice', notice.type]">{{ notice.message }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type Notice = { type: 'success' | 'error', message: string }

const form = reactive({
  name: '',
  phone: '',
  comment: ''
})

const errors = reactive<{ name?: string; phone?: string }>({})
const loading = ref(false)
const notice = ref<Notice | null>(null)

function validateClient() {
  errors.name = !form.name.trim() ? 'Введите имя' : ''
  const phone = form.phone.trim()
  if (!phone) {
    errors.phone = 'Введите номер телефона'
  } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(phone)) {
    errors.phone = 'Некорректный телефон'
  } else {
    errors.phone = ''
  }
  return !errors.name && !errors.phone
}

async function onSubmit() {
  notice.value = null
  if (!validateClient()) return
  loading.value = true
  try {
    const res = await $fetch<{ ok: boolean; errors?: any; error?: string }>('/api/contact', {
      method: 'POST',
      body: { ...form }
    })

    if (res.ok) {
      notice.value = { type: 'success', message: 'Заявка успешно отправлена! Мы скоро свяжемся с вами.' }
      form.name = ''
      form.phone = ''
      form.comment = ''
      errors.name = ''
      errors.phone = ''
    } else {
      if (res.errors) {
        errors.name = res.errors.name || ''
        errors.phone = res.errors.phone || ''
      }
      notice.value = { type: 'error', message: res.error || 'Ошибка отправки. Попробуйте позже.' }
    }
  } catch (e: any) {
    const data = e?.data
    if (data?.errors) {
      errors.name = data.errors.name || ''
      errors.phone = data.errors.phone || ''
    }
    const msg = data?.error || e?.message || 'Сеть недоступна или сервер недоступен.'
    notice.value = { type: 'error', message: msg }
  } finally {
    loading.value = false
  }
}
</script>


<style>
@import "./contact.css";
</style>