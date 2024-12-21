<template>
    <div id="app">
      <Navbar />
      <router-view></router-view> <!-- Tempat dinamis untuk menampilkan halaman -->
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  
  export default {
    components: {
      Navbar,
      Footer
    }
  }
  </script>
  
  <style scoped>
  /* Styles khusus untuk komponen App.vue */
  </style>
  