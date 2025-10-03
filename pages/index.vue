<template>
  <div class="ione-main">
  <h2 class="ione-main-h2" >IONE <br> age <br> ncy</h2>
  <h1 class="ione-main-title" v-reveal>Маркетинговое агентство полного цикла</h1>
  <p class="ione-main-subtitle" v-reveal="{ delay: 100 }">Быстро, <span>качественно,</span> лучше</p>

  <section id="about" class="ione-main-content">
  <h2 class="outline-text" v-reveal="'left'">IONE AGENCY</h2>

  <div class="ione-main-content-text" v-reveal>
  <h2>Проектируем функциональные сайты, сочетающие технологичность, гибкость и соответствие уникальным требованиям вашего бизнеса.</h2>
  <NuxtLink to="/#contact">Оставить заявку</NuxtLink>
      </div>
  <div class="ione-main-content-img" v-reveal="'right'">
  <img src="@/assets/main/headerimg.svg" alt="ione" loading="lazy" decoding="async">
      </div>
    </section>

    <section id="services" class="ione-main-services">
  <h2 class="ione-main-services-h2" v-reveal>01 <br> УСЛУГИ</h2>
      <div class="ione-main-services-wrapper">
        <div class="ione-main-services-wrapper-left">
          <div class="ione-main-services-wrapper-item " v-reveal>

            <div class="ione-main-services-wrapper-item-text" v-reveal>
              <h3>Events</h3>
              <p>Организуем фестивали, турниры, квесты и конференции, которые не только впечатляют, но и дают измеримые результаты для бренда.
              </p>
              <NuxtLink to="/#contact">Подробнее</NuxtLink>
            </div>

            <div class="ione-main-services-wrapper-item-img" v-reveal="'right'">
              <img src="@/assets/main/events.png" alt="Production" loading="lazy" decoding="async">
            </div>
          </div>
          <div class="ione-main-services-wrapper-item ione-main-services-wrapper-item-first" v-reveal>
            <div class="ione-main-services-wrapper-item-img" v-reveal>
              <img src="@/assets/main/production.png" alt="Production" loading="lazy" decoding="async">
            </div>
            <div class="ione-main-services-wrapper-item-text" v-reveal="'right'">
              <h3>Production</h3>
              <p>Создаём сериалы для соцсетей, имиджевые и рекламные ролики с яркой идеей и креативной подачей.</p>
              <NuxtLink to="/#contact">Подробнее</NuxtLink>
            </div>


          </div>

        </div>
  <div class="ione-main-services-wrapper-right" v-reveal>
          <div class="ione-main-services-wrapper-right-img" v-reveal>
            <img src="@/assets/main/kol.png" alt="Services" loading="lazy" decoding="async">
          </div>
          <div class="ione-main-services-wrapper-item-text ione-main-services-wrapper-item-text-right" v-reveal="'left'">
            <h3>KоL / Influence
            </h3>
            <p>Подбираем блогеров и стримеров под задачи бренда, делаем нативные интеграции и обеспечиваем доверие аудитории.
            </p>
            <NuxtLink to="/#contact">Подробнее</NuxtLink>
          </div>
        </div>

      </div>
  <div class="ione-main-services-wrapper-bottom" v-reveal>
  <div class="ione-main-services-wrapper-item ione-main-services-wrapper-item-bottom" v-reveal>

          <div class="ione-main-services-wrapper-item-text" v-reveal>
            <h3>Web-development
            </h3>
            <p>Разрабатываем сайты, приложения, CRM и Telegram-боты, которые удобны, стильны и эффективны для бизнеса.

            </p>
            <NuxtLink to="/#contact">Подробнее</NuxtLink>
          </div>

          <div class="ione-main-services-wrapper-item-img" v-reveal>
            <img src="@/assets/main/web.png" alt="Production" loading="lazy" decoding="async">
          </div>
        </div>
  <div class="ione-main-services-wrapper-item" v-reveal>

          <div class="ione-main-services-wrapper-item-text" v-reveal="'left'">
            <h3>Digital</h3>
            <p>SMM, SEO, контекстная реклама и Meta Ads: привлекаем целевой трафик и лиды с прозрачной аналитикой и прогнозируемым результатом.</p>
            <NuxtLink to="/#contact">Подробнее</NuxtLink>
          </div>

          <div class="ione-main-services-wrapper-item-img" v-reveal>
            <img src="@/assets/main/digital.png" alt="Production" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>
  <section id="works" class="ione-main-works" v-reveal>
      <h2 class="ione-main-services-h2">02 <br> КЕЙСЫ</h2>
  <div class="ione-main-works-wrapper" v-reveal>
        <div class="ione-main-works-wrapper-item">
          <div class="ione-main-works-wrapper-item-img">
            <img src="@/assets/main/ocean.jpg" alt="ione-works" loading="lazy" decoding="async">
          </div>
          <div class="ione-main-works-wrapper-item-text">
            <h2>OCEAN ODYSSEY 2024</h2>

            <div class="ione-main-works-wrapper-item-text-span">
              <span>Marketing</span>
              <span>Ивент</span>
              <span>Креатив</span>
            </div>
            <p>
              Тематическое событие, посвящённое обновлению в PUBG MOBILE. ЦА — тинейджеры и активная молодёжь. Участие приняли более 4500 человек.
            </p>
          </div>
          <NuxtLink to="https://www.instagram.com/reel/C-H4pxAvadA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D">
            <img src="@/assets/arrow.png" alt="arrow">
          </NuxtLink>
        </div>
        <div class="ione-main-works-wrapper-item">
          <div class="ione-main-works-wrapper-item-img">
            <img src="@/assets/main/korzinka.jpg" alt="ione-works" loading="lazy" decoding="async">
          </div>
          <div class="ione-main-works-wrapper-item-text">
            <h2>Турнир KORZINKA.UZ CYBER UP</h2>

            <div class="ione-main-works-wrapper-item-text-span">
              <span>Marketing</span>
              <span>Организация</span>
              <span>Турнир</span>
            </div>
            <p>
             Киберспортивный турнир по Dota 2 от KORZINKA.UZ. ЦА — игроки и фанаты Dota 2. Посетили более 2500 человек.
            </p>
          </div>
          <NuxtLink to="/">
            <img src="@/assets/arrow.png" alt="arrow">
          </NuxtLink>
        </div>
        <div class="ione-main-works-wrapper-item">
          <div class="ione-main-works-wrapper-item-img">
            <img src="@/assets/main/amir.jpg" alt="ione-works" loading="lazy" decoding="async">
          </div>
          <div class="ione-main-works-wrapper-item-text">
            <h2>WINTER FEST PUBG MOBILE</h2>

            <div class="ione-main-works-wrapper-item-text-span">
              <span>Менеджмент</span>
              <span>Marketing</span>
              <span>Ивент</span>
            </div>
            <p>
             2-дневный зимний фестиваль PUBG MOBILE на курорте Amirsoy (декабрь 2024). ЦА — молодые активные люди, геймеры и фанаты киберспорта. Присутствовало более 9000 человек.
            </p>
          </div>
          <NuxtLink to="https://www.instagram.com/reel/DEe3K4XMscy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D">
            <img src="@/assets/arrow.png" alt="arrow">
          </NuxtLink>
        </div>
        <div class="ione-main-works-wrapper-item">
          <div class="ione-main-works-wrapper-item-img">
            <img src="@/assets/main/li.png" alt="ione-works" loading="lazy" decoding="async">
          </div>
          <div class="ione-main-works-wrapper-item-text">
            <h2>Lixiang Uzbekistan</h2>

            <div class="ione-main-works-wrapper-item-text-span">
              <span>UI/UX</span>
              <span>Разработка</span>
              <span>SEO</span>
            </div>
            <p>
              Корпоративный сайт для представительства Lixiang в Узбекистане. Оптимизирован под продвижение бренда и удобство пользователей.
            </p>
          </div>
          <NuxtLink to="https://lixiang-uzbekistan.uz/">
            <img src="@/assets/arrow.png" alt="arrow">
          </NuxtLink>
        </div>
        <div class="ione-main-works-wrapper-item">
          <div class="ione-main-works-wrapper-item-img">
            <img src="@/assets/main/abu.png" alt="ione-works" loading="lazy" decoding="async">
          </div>
          <div class="ione-main-works-wrapper-item-text">
            <h2>Abuexpress </h2>

            <div class="ione-main-works-wrapper-item-text-span">
              <span>UI/UX </span>
              <span>Разработка</span>
              <span>SEO</span>

            </div>
            <p>
              Платформа для экспресс-доставки. Реализована удобная навигация, адаптивный дизайн и SEO-оптимизация для роста заказов.
            </p>
          </div>
          <NuxtLink to="https://abuexpress.uz/ru">
            <img src="@/assets/arrow.png" alt="arrow">
          </NuxtLink>
        </div>
        <div class="ione-main-works-wrapper-item">
          <div class="ione-main-works-wrapper-item-img">
            <img src="@/assets/main/tur.png" alt="ione-works" loading="lazy" decoding="async">
          </div>
          <div class="ione-main-works-wrapper-item-text">
            <h2>Magic Tour</h2>

            <div class="ione-main-works-wrapper-item-text-span">
              <span>UI/UX </span>
               <span>Разработка</span>
              <span>SEO</span>
            </div>
            <p>
               Сайт туристической компании с акцентом на бронирование и информирование клиентов. Удобный интерфейс и оптимизация под поисковые системы.
            </p>
          </div>
          <NuxtLink to="http://magic-tour.uz/">
            <img src="@/assets/arrow.png" alt="arrow">
          </NuxtLink>
        </div>

      </div>
    </section>

    <section class="ione-main-clients">
      <h2 class="ione-main-services-h2" v-reveal>03 <br> НАШИ КЛИЕНТЫ</h2>

      <div class="ione-main-clients-wrapper" v-reveal>
        <h2 class="ione-main-clients-wrapper-item">
          PubGmobile
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          IT Park

        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Samsung
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Uzum
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          FlashEnergy
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Korzinka
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Amirsoy
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Яндекс
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Honor
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Mi
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Westminster
        </h2>
        <h2 class="ione-main-clients-wrapper-item">
          Министерство цифровых технологий
        </h2>

      </div>
    </section>

  <section id="contact" class="ione-main-contact">
      <h2 class="ione-main-services-h2" v-reveal>04 <br> ЕСТЬ ВОПРОСЫ?</h2>
  <p class="ione-main-contact-p" v-reveal="{ delay: 100 }">Оставьте заявку или позвоните нам, <br> и мы с удовольствием поможем вам разобраться в вашем кейсе</p>

      <div v-reveal>
        <Contact />
      </div>
    </section>
  </div>
</template>


<style>
@import './index.css';
</style>
<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'
useSeo({
  title: 'Главная',
  description: 'Полный цикл маркетинга: Events, Production, KOL/Influence, Web-development, Digital. Создаём решения для роста бизнеса.',
  canonicalPath: '/'
})
</script>