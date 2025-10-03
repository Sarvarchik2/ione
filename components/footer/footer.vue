<template>
  <div class="footer">
    <div class="footer-item" v-reveal>
      <div class="footer-item-img">
  <img src="@/assets/logo.svg" alt="ione" loading="lazy" decoding="async">
      </div>
      <h3>Быстро, <span>качественно,</span> <br> лучше</h3>
  <div class="footer-item-link" v-reveal="{ delay: 100 }">
        <a class="footer-item-link-img" href="https://www.linkedin.com/company/ione-marketing/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <img src="@/assets/navbar/link.svg" alt="ione linked in" loading="lazy" decoding="async">
        </a>
        <a class="footer-item-link-img" href="https://www.instagram.com/ionemarketing.uz?igsh=NTd2eHA1YjZ3bGdj" target="_blank" rel="noopener" aria-label="Instagram">
          <img src="@/assets/navbar/instagram.svg" alt="ione instagram" loading="lazy" decoding="async">
        </a>
      </div>
    </div>
  <ul class="footer-item" v-reveal>
      <h2>Навигация</h2>
      <li>Главная</li>
      <li>Все услуги</li>
      <li>Контакты</li>
    </ul>
  <ul class="footer-item" v-reveal>
      <h2>Услуги</h2>
      <li>Разработка веб сайтов</li>
      <li>Внедрение IP</li>
      <li>Внедрение N/A</li>
    </ul>
  <ul class="footer-item" v-reveal>
      <h2>Контакты</h2>
      <li>Номер телефона <a href="tel:+99890044554">+998 90 004 45 54</a></li>
      <li>Электронная почта <a href="mailto:ionemarketinguz@gmail.com">ionemarketinguz@gmail.com</a></li>
    </ul>
  </div>
</template>



<style>
@import './footer.css';
</style>
<script setup lang="ts">
</script>