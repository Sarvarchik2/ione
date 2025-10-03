<template>
  <div class="navbar">
    <NuxtLink to="/" class="logo">
  <img src="@/assets/logo.svg" alt="IONE Logo" loading="eager" decoding="async">
    </NuxtLink>
    <ul>
      <NuxtLink to="/#about"><li>О нас</li></NuxtLink>
      <NuxtLink to="/#services"><li>Услуги</li></NuxtLink>
      <NuxtLink to="/#works"><li>Кейсы</li></NuxtLink>
      <NuxtLink to="/contact"><li>Контакты</li></NuxtLink>
    </ul>
    <div class="nav-btns">
      <a class="nav-btns-item" href="tel:+998900044554" aria-label="Позвонить +998 90 004 45 54">
        <img src="@/assets/navbar/phone.svg" alt="Phone" loading="lazy" decoding="async">
      </a>
      <a class="nav-btns-item" href="https://www.linkedin.com/company/ione-marketing/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <img src="@/assets/navbar/link.svg" alt="LinkedIn" loading="lazy" decoding="async">
      </a>
      <div class="menu-btn">
        <img src="@/assets/navbar/menu-bar.png" alt="menu">
      </div>
    </div>

  </div>
</template>

<style>
@import "./navbar.css";
</style>
<script setup lang="ts">
</script>