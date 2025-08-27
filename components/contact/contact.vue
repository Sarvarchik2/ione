<template>
  <div class="contact-wrapper">
    <div class="contact-left">
      <h2>Наши контакты</h2>
      <h3>Свяжитесь с нами</h3>
      <p>Для бесплатной консультации просто оставьте заявку на сайте или позвоните нам. Мы поможем определить потребности вашего бизнеса и подберем оптимальные варианты</p>
      <div class="contact-left-link">
        <NuxtLink >
          <span>Телефон номер</span>
          +998 99 123 45 67
        </NuxtLink>
        <NuxtLink >
          <span>Электронная почта</span>
          ioneagency@gmail.com
        </NuxtLink>
      </div>

      <img class="contact-img" src="@/assets/ione.svg" alt="ione">

    </div>
    <form class="contact-form">
      <h2>Форма связи</h2>

      <h3>Давайте обсудим ваш проект</h3>

      <input type="text" placeholder="Ваше имя*">
      <input type="text" placeholder="Телефон номер*">
      <textarea placeholder="Ваш комментарий"/>
      <button>Отправить</button>
    </form>
  </div>
</template>


<style>
@import "./contact.css";
</style>