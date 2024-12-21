<template>
  <div class="about-container">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="title" ref="title">Welcome to Fish World</h1>
        <p class="description" ref="description">Explore sustainable and high-quality fishing products, designed with nature in mind.</p>
      </div>
    </section>

    <section class="products-section">
      <h2 class="section-title">Our Products</h2>
      <div class="product-cards">
        <div
          class="product-card"
          v-for="(product, index) in products"
          :key="index"
          ref="cards"
        >
          <img :src="product.image" alt="product.name" class="product-image" />
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
        </div>
      </div>
    </section>

    <section class="sustainability-section">
      <h2 class="section-title">Sustainability Commitment</h2>
      <p class="sustainability-text">
        We are committed to providing products that minimize environmental impact. Our fishing gear is crafted from
        sustainable materials, ensuring both durability and eco-friendliness.
      </p>
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'AboutPage',
  setup() {
    const title = ref(null);
    const description = ref(null);
    const cards = ref([]);

    const products = [
      {
        name: 'Fishing Rod',
        image: 'https://blackfinrods.com/cdn/shop/products/DSC04351_535x.jpg?v=1660843276',
        description: 'Lightweight, durable, and eco-friendly fishing rod for all types of fishing.',
      },
      {
        name: 'Fishing Rod Bait',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4npZkPDcQr661B69cbDOukxTgvuTHmQ35w&s',
        description: 'Sustainable, biodegradable bait options for eco-conscious anglers.',
      },
      {
        name: 'Fishing Net',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLtakGNi1i2inLWf2ocaozpLKXhp72YsSSg&s',
        description: 'Durable fishing net made from recycled materials.',
      },
      {
        name: 'Fishing Nail',
        image: 'https://sensiblesurvival.org/wp-content/uploads/2011/02/hooks.jpg',
        description: 'Eco-friendly fishing nails designed for durability and performance.',
      },
      {
        name: 'Fishing Basket',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDAJYITYwOfZClH0vswLLxB-u2hqP7-0L9Q&s',
        description: 'Made from sustainable materials, perfect for storing your catch.',
      },
    ];

    onMounted(() => {
      gsap.fromTo(title.value, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(description.value, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
      gsap.fromTo(cards.value, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1, delay: 1, stagger: 0.2 });
    });

    return { title, description, cards, products };
  },
};
</script>

<style scoped>
.about-container {
  padding: 2rem;
  background-color: #f4f7f6;
  font-family: 'Poppins', sans-serif;
  color: #4c4c4c;
  background-image: url('https://images.unsplash.com/photo-1454123253751-1fe2b9e0c10d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
}

.hero-section {
  text-align: center;
  margin-bottom: 3rem;
  background-color: #e0f2f1;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero-content .title {
  font-size: 4vw; /* Menggunakan viewport width untuk ukuran font responsif */
  font-weight: 700;
  color: #00796b;
}

.hero-content .description {
  font-size: 2vw; /* Menggunakan unit relatif viewport */
  color: #004d40;
  margin-top: 1rem;
}

.products-section {
  margin-top: 4rem;
}

.section-title {
  font-size: 3vw; /* Menggunakan unit relatif viewport */
  color: #00796b;
  margin-bottom: 2rem;
  text-align: center;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.product-card {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  will-change: transform;
  perspective: 1000px;
}

.product-card:hover {
  transform: scale(1.1) rotate3d(1, 1, 0, 20deg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: crazy-rotation 1s ease-in-out infinite alternate;
}

.product-card:active {
  transform: scale(1) rotate3d(0, 0, 0, 0deg);
}

.product-image {
  width: 100%;
  border-radius: 8px;
  height: 200px;
  object-fit: cover;
}

.product-name {
  font-size: 2vw; /* Menggunakan unit viewport untuk ukuran nama produk */
  font-weight: 600;
  color: #00796b;
  margin-top: 1rem;
}

.product-description {
  font-size: 1.2vw; /* Menggunakan unit viewport untuk ukuran deskripsi produk */
  color: #4c4c4c;
  margin-top: 0.5rem;
}

.sustainability-section {
  margin-top: 4rem;
  background-color: #00796b;
  padding: 2rem;
  border-radius: 10px;
  color: white;
  text-align: center;
}

.sustainability-text {
  font-size: 2vw; /* Ukuran teks responsif */
  line-height: 1.6;
}

@keyframes crazy-rotation {
  0% {
    transform: rotate3d(1, 1, 0, 20deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}

/* Media Queries for Additional Responsiveness */
@media (max-width: 1200px) {
  .hero-content .title {
    font-size: 3.5vw;
  }

  .hero-content .description {
    font-size: 1.8vw;
  }

  .product-name {
    font-size: 2.5vw;
  }

  .product-description {
    font-size: 1.1vw;
  }

  .sustainability-text {
    font-size: 1.8vw;
  }
}

@media (max-width: 768px) {
  .hero-content .title {
    font-size: 4vw;
  }

  .hero-content .description {
    font-size: 2.2vw;
  }

  .product-name {
    font-size: 3vw;
  }

  .product-description {
    font-size: 1.3vw;
  }

  .sustainability-text {
    font-size: 2vw;
  }
}

@media (max-width: 480px) {
  .hero-content .title {
    font-size: 5vw;
  }

  .hero-content .description {
    font-size: 3vw;
  }

  .product-name {
    font-size: 4vw;
  }

  .product-description {
    font-size: 2vw;
  }

  .sustainability-text {
    font-size: 2.5vw;
  }
}
</style>
