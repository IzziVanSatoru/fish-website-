<template>
  <footer>
    <p>&copy; 2024 Fish Store | All Rights Reserved</p>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, rgba(0, 80, 180, 0.8), rgba(0, 150, 255, 0.8));
  color: white;
  padding: 30px;
  text-align: center;
  font-family: 'Verdana', sans-serif;
  border-top: 4px solid #4fa3d1;
  position: relative;
  z-index: 1;
  animation: waveAnimation 10s ease-in-out infinite;
}

footer p {
  font-size: 1.2rem;
  margin: 0;
  letter-spacing: 1px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
}

@keyframes waveAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Responsif untuk perangkat kecil */
@media (max-width: 600px) {
  footer {
    padding: 20px;
  }

  footer p {
    font-size: 1rem;
  }
}
</style>
