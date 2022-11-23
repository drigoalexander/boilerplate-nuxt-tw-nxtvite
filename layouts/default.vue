<template>
  <div class="min-h-screen flex w-full flex-col">
    <Navbar />
    <Welcome />
    <Nuxt />
    <Toast />
  </div>
</template>

<script>
import Toast from '~/components/Toast.vue'
import Navbar from '~/components/Navbar.vue'
export default { components: { Toast, Navbar } }
</script>

<style></style>
