<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  /* Styling Navbar dengan tema lautan */
  nav {
    background: linear-gradient(135deg, #1e3c72, #2a5298); /* Gradasi biru laut */
    padding: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5); /* Bayangan halus */
    position: sticky; /* Agar navbar tetap terlihat */
    top: 0;
    z-index: 10;
  }
  
  /* Responsivitas untuk navigasi */
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin: 0;
    padding: 0;
    flex-wrap: wrap; /* Agar fleksibel di layar kecil */
  }
  
  /* Gaya Link Navigasi */
  li a {
    color: #cce7ff; /* Warna biru lembut */
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: color 0.3s ease, transform 0.3s ease;
    position: relative;
    padding: 5px 10px;
  }
  
  /* Efek hover pada link */
  li a:hover {
    color: #ffffff; /* Warna putih saat dihover */
    transform: scale(1.1); /* Sedikit membesar */
  }
  
  /* Garis bawah animasi pada hover */
  li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background-color: #cce7ff; /* Warna garis bawah */
    left: 50%;
    bottom: 0;
    transition: width 0.3s ease, left 0.3s ease;
  }
  
  li a:hover::after {
    width: 100%;
    left: 0; /* Membuat garis penuh saat hover */
  }
  
  /* Responsivitas untuk layar kecil */
  @media (max-width: 768px) {
    nav {
      padding: 10px;
    }
  
    ul {
      gap: 15px; /* Mengurangi jarak antar item */
    }
  
    li a {
      font-size: 1rem; /* Ukuran font lebih kecil */
    }
  }
  
  /* Efek animasi halus */
  nav {
    animation: fadeIn 1s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  