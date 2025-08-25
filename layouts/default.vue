<template>
  <div class="layout-default">
    <header class="main-header">
    <Navbar/>
    </header>

    <main class="page-content">
      <slot />
    </main>

   <Footer/>
  </div>
</template>

<style scoped>
.layout-default { min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; }
</style>
<script setup lang="ts">
import Navbar from "../components/navbar/navbar.vue";
import Footer from "../components/footer/footer.vue";
</script>