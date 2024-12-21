<template>
  <div class="home">
    <div class="hero-section" ref="heroSection">
      <div class="hero-content">
        <h1 ref="heroTitle">Welcome to Fish World</h1>
        <p ref="heroSubtitle">Explore the best fishing gear, bait, and accessories</p>
        <Button ref="heroButton" @click="goToProducts">Shop Now</Button>
      </div>
    </div>

    <section class="about-us" ref="aboutUs">
      <h2>About Us</h2>
      <p>We provide premium fishing products to make your fishing experience unforgettable. Dive into our collection and start your journey today.</p>
    </section>

    <section class="testimonials">
      <h2>What Our Customers Say</h2>
      <div class="testimonial">
        <p>"Great quality products! My fishing trips are always more enjoyable thanks to Fish World!"</p>
        <cite>- John Doe</cite>
      </div>
      <div class="testimonial">
        <p>"The best fishing gear I’ve ever bought. Highly recommend to any fishing enthusiast!"</p>
        <cite>- Sarah Smith</cite>
      </div>
    </section>

    <section class="cta-banner" ref="ctaBanner">
      <h2>Ready for your next adventure?</h2>
      <Button @click="goToProducts">Browse Our Collection</Button>
    </section>

    <section class="featured-products">
      <h2> Top Featured Products</h2>
      <div class="products-container">
        <div class="product-card" v-for="product in products" :key="product.id" ref="productCards">
          <img :src="product.image" alt="Product" />
          <h3>{{ product.name }}</h3>
          <p>{{ formatCurrency(product.price) }}</p>
        </div>
      </div>
    </section>

    <section class="quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import Button from '../components/Button.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Button
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Fishing Rod', price: 50, image: 'https://via.placeholder.com/200x150?text=Rod' },
        { id: 2, name: 'Fishing Bait', price: 15, image: 'https://via.placeholder.com/200x150?text=Bait' },
        { id: 3, name: 'Fishing Basket', price: 30, image: 'https://via.placeholder.com/200x150?text=Basket' }
      ]
    }
  },
  methods: {
    goToProducts() {
      this.$router.push('/products')
    },
    formatCurrency(value: number) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value)
    }
  },
  setup() {
    const heroSection = ref(null)
    const heroTitle = ref(null)
    const heroSubtitle = ref(null)
    const heroButton = ref(null)
    const aboutUs = ref(null)
    const ctaBanner = ref(null)
    const productCards = ref([])

    onMounted(() => {
      // Animasi untuk Hero Section
      gsap.from(heroSection.value, { opacity: 0, y: -100, duration: 1, delay: 0.5 })
      gsap.from(heroTitle.value, { opacity: 0, x: -100, duration: 1, delay: 1 })
      gsap.from(heroSubtitle.value, { opacity: 0, x: 100, duration: 1, delay: 1.2 })
      gsap.from(heroButton.value, { opacity: 0, scale: 0.5, duration: 0.8, delay: 1.5 })

      // Animasi untuk About Us section
      gsap.from(aboutUs.value, { opacity: 0, y: 50, duration: 1, delay: 1.8 })

      // Animasi untuk CTA Banner
      gsap.from(ctaBanner.value, { opacity: 0, scale: 0.5, duration: 1, delay: 2 })

      // Animasi untuk produk
      productCards.value.forEach((card, index) => {
        gsap.from(card, { opacity: 0, y: 50, duration: 1, delay: 2 + index * 0.3 })
      })
    })

    return {
      heroSection,
      heroTitle,
      heroSubtitle,
      heroButton,
      aboutUs,
      ctaBanner,
      productCards
    }
  }
})
</script>

<style scoped>
.home {
  font-family: 'Arial', sans-serif;
  color: #fff;
}

.hero-section {
  height: 100vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content {
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: bold;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.hero-content button {
  background-color: #0072ff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.hero-content button:hover {
  background-color: #00c6ff;
}

.about-us,
.featured-products,
.testimonials,
.cta-banner,
.quick-links {
  padding: 40px 20px;
  text-align: center;
  background-color: #1a1a1a;
  border-top: 1px solid #444;
}

.about-us h2,
.featured-products h2,
.testimonials h2,
.cta-banner h2,
.quick-links h3 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.testimonial {
  margin: 20px 0;
  font-style: italic;
}

.testimonial cite {
  display: block;
  margin-top: 10px;
  color: #ccc;
}

.cta-banner {
  background-color: #0072ff;
  padding: 20px;
  color: white;
}

.cta-banner button {
  background-color: #fff;
  color: #0072ff;
  border: 1px solid #0072ff;
}

.cta-banner button:hover {
  background-color: #00c6ff;
}

.products-container {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}

.product-card {
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  width: 200px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  max-width: 100%;
  border-radius: 5px;
}

.product-card h3 {
  font-size: 1.2rem;
  margin-top: 10px;
}

.product-card p {
  font-size: 1rem;
  margin-top: 5px;
}

.quick-links ul {
  list-style-type: none;
  padding: 0;
}

.quick-links ul li {
  margin: 10px 0;
}

.quick-links ul li a {
  color: #0072ff;
  text-decoration: none;
  font-size: 1.2rem;
}

.quick-links ul li a:hover {
  text-decoration: underline;
}
</style>
