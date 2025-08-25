<template>
  <div class="navbar">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="IONE Logo">
    </div>
    <ul>
      <NuxtLink>
        <li>О нас</li>
      </NuxtLink>
      <NuxtLink>
        <li>Услуги</li>
      </NuxtLink>
      <NuxtLink>
        <li>Кейсы</li>
      </NuxtLink>
      <NuxtLink>
        <li>Контакты</li>
      </NuxtLink>
    </ul>
    <div class="nav-btns">
      <NuxtLink class="nav-btns-item">
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