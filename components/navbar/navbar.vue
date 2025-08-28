<template>
  <div class="navbar">
    <NuxtLink to="/" class="logo">
      <img src="@/assets/logo.svg" alt="IONE Logo">
    </NuxtLink>
    <ul>
      <NuxtLink to="/">
        <li>О нас</li>
      </NuxtLink>
      <NuxtLink to="#services">
        <li>Услуги</li>
      </NuxtLink>
      <NuxtLink to="#works">
        <li>Кейсы</li>
      </NuxtLink>
      <NuxtLink to="/contact">
        <li>Контакты</li>
      </NuxtLink>
    </ul>
    <div class="nav-btns">
      <NuxtLink class="nav-btns-item" >
        <img src="@/assets/navbar/phone.svg" alt="Phone">
      </NuxtLink>
      <NuxtLink class="nav-btns-item">
        <img src="@/assets/navbar/telegram.svg" alt="Telegram">
      </NuxtLink>
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