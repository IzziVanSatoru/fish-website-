<template>
  <div id="product-page">
    <header>
      <h1>Our Products</h1>
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search products..."
          class="search-bar"
        />
      </div>
    </header>

    <!-- Category Filter -->
    <section class="category-filter">
      <button @click="filterByCategory('all')" :class="{ active: selectedCategory === 'all' }">All</button>
      <button @click="filterByCategory('fishing')" :class="{ active: selectedCategory === 'fishing' }">Fishing</button>
      <button @click="filterByCategory('bait')" :class="{ active: selectedCategory === 'bait' }">Bait</button>
      <button @click="filterByCategory('net')" :class="{ active: selectedCategory === 'net' }">Net</button>
      <button @click="filterByCategory('basket')" :class="{ active: selectedCategory === 'basket' }">Basket</button>
    </section>

    <!-- Sort by Price -->
    <section class="sort-container">
      <button @click="sortByPrice('asc')">Sort by Price (Low to High)</button>
      <button @click="sortByPrice('desc')">Sort by Price (High to Low)</button>
    </section>

    <!-- Product Count -->
    <section class="product-count">
      <p>Total Products: {{ filteredProducts.length }}</p>
    </section>

    <!-- Product List with Pagination -->
    <section class="product-list">
      <div v-for="product in paginatedProducts" :key="product.id" class="product">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">{{ formatPrice(product.price) }}</p>
        <button @click="addToCart(product)" class="add-to-cart">Add to Cart</button>
      </div>
    </section>

    <!-- Pagination Controls -->
    <section class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage * productsPerPage >= filteredProducts.length">Next</button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';

export default defineComponent({
  name: "Product",
  setup() {
    const router = useRouter();
    const searchQuery = ref('');
    const selectedCategory = ref('all');
    const currentPage = ref(1);
    const productsPerPage = 4;
    const products = ref([
      { id: 1, name: "Fishing Rod", price: 49.99, image: "https://example.com/fishing-rod.jpg", category: "fishing" },
      { id: 2, name: "Fishing Rod Bait", price: 9.99, image: "https://example.com/bait.jpg", category: "bait" },
      { id: 3, name: "Fishing Net", price: 24.99, image: "https://example.com/fishing-net.jpg", category: "net" },
      { id: 4, name: "Fishing Nail", price: 3.9, image: "https://example.com/fishing-net.jpg", category: "nail" },
      { id: 5, name: "Fishing Basket", price: 3.9, image: "https://example.com/fishing-net.jpg", category: "basket" },
    ]);
    const cart = ref([]); // Track the cart items

    const filteredProducts = computed(() => {
      let filtered = products.value;

      if (searchQuery.value) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }

      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(product => product.category === selectedCategory.value);
      }

      return filtered;
    });

    const paginatedProducts = computed(() => {
      const startIndex = (currentPage.value - 1) * productsPerPage;
      return filteredProducts.value.slice(startIndex, startIndex + productsPerPage);
    });

    function formatPrice(price: number) {
      return `$${price.toFixed(2)}`;
    }

    function addToCart(product: any) {
      alert(`${product.name} has been added to your cart!`);
      router.push({ path: '/cart' });
    }

    function filterByCategory(category: string) {
      selectedCategory.value = category;
      currentPage.value = 1; // Reset to first page when category changes
    }

    function sortByPrice(order: string) {
      filteredProducts.value.sort((a: any, b: any) => {
        if (order === 'asc') {
          return a.price - b.price;
        } else if (order === 'desc') {
          return b.price - a.price;
        }
        return 0;
      });
    }

    function changePage(page: number) {
      if (page < 1 || page > Math.ceil(filteredProducts.value.length / productsPerPage)) {
        return;
      }
      currentPage.value = page;
    }

    // GSAP animations with 3D effects
    onMounted(() => {
      gsap.from("#product-page header", {
        duration: 1.5,
        y: -100,
        opacity: 0,
        rotationX: -60,
        transformOrigin: "top",
        ease: "power4.out"
      });

      gsap.from(".category-filter button", {
        duration: 1,
        opacity: 0,
        rotationY: -90,
        stagger: 0.3,
        ease: "back.out(1.7)"
      });

      gsap.from(".product", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        rotationY: 180,
        scale: 0.9,
        stagger: 0.3,
        transformOrigin: "center",
        ease: "power4.out"
      });

      gsap.from(".product-image", {
        duration: 1.2,
        scale: 0.8,
        rotationX: -90,
        ease: "power2.out",
        delay: 0.3
      });

      gsap.from(".add-to-cart", {
        duration: 1,
        opacity: 0,
        y: 50,
        scale: 0.8,
        ease: "elastic.out(1, 0.3)",
        delay: 0.5
      });
    });

    return {
      searchQuery,
      selectedCategory,
      currentPage,
      productsPerPage,
      filteredProducts,
      paginatedProducts,
      formatPrice,
      addToCart,
      filterByCategory,
      sortByPrice,
      changePage,
    };
  },
});
</script>

<style scope>
#product-page {
  background-image: url('https://images.unsplash.com/photo-1560260240-c6ef90a163a4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 2.5em;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.search-container {
  margin-top: 15px;
}

.search-bar {
  width: 300px;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.category-filter {
  text-align: center;
  margin-top: 20px;
}

.category-filter button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.category-filter button.active,
.category-filter button:hover {
  background-color: #0056b3;
}

.sort-container {
  text-align: center;
  margin-top: 20px;
}

.sort-container button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.product-count {
  text-align: center;
  margin-top: 10px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  width: 250px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.product-name {
  font-size: 1.5em;
  margin: 10px 0;
}

.product-price {
  font-size: 1.2em;
  color: #28a745;
  margin: 10px 0;
}

.add-to-cart {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #0056b3;
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
