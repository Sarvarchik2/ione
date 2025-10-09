<template>
  <div class="navbar">
    <NuxtLink to="/" class="logo">
      <img src="@/assets/logo.svg" alt="IONE Logo" loading="eager" decoding="async">
    </NuxtLink>
    <ul class="desktop-menu">
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
      <div class="menu-btn" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <div class="menu-btn-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <div class="mobile-menu-overlay" @click="closeMenu"></div>
      <div class="mobile-menu-content">
        <div class="mobile-menu-header">
          <img src="@/assets/logo.svg" alt="IONE Logo" class="mobile-logo">
          <button class="close-btn" @click="closeMenu">
            <span></span>
            <span></span>
          </button>
        </div>
        
        <nav class="mobile-nav">
          <NuxtLink to="/#about" @click="closeMenu" class="mobile-nav-link">
            <span class="nav-number">01</span>
            <span class="nav-text">О нас</span>
          </NuxtLink>
          <NuxtLink to="/#services" @click="closeMenu" class="mobile-nav-link">
            <span class="nav-number">02</span>
            <span class="nav-text">Услуги</span>
          </NuxtLink>
          <NuxtLink to="/#works" @click="closeMenu" class="mobile-nav-link">
            <span class="nav-number">03</span>
            <span class="nav-text">Кейсы</span>
          </NuxtLink>
          <NuxtLink to="/contact" @click="closeMenu" class="mobile-nav-link">
            <span class="nav-number">04</span>
            <span class="nav-text">Контакты</span>
          </NuxtLink>
        </nav>

        <div class="mobile-menu-footer">
          <div class="mobile-contacts">
            <a href="tel:+998900044554" class="mobile-contact-item">
              <img src="@/assets/navbar/phone.svg" alt="Phone">
              <span>+998 90 004 45 54</span>
            </a>
            <a href="https://www.linkedin.com/company/ione-marketing/" target="_blank" class="mobile-contact-item">
              <img src="@/assets/navbar/link.svg" alt="LinkedIn">
              <span>LinkedIn</span>
            </a>
          </div>
          <p class="mobile-copyright">© 2025 IONE Agency</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./navbar.css";
</style>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Блокируем скролл при открытом меню
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Закрытие меню при нажатии Escape
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  // Восстанавливаем скролл при размонтировании компонента
  document.body.style.overflow = 'auto'
})
</script>