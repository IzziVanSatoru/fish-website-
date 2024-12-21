<template>
  <div id="cart-page">
    <header>
      <h1>Your Cart</h1>
      <p v-if="cart.length === 0">Your cart is empty. Start shopping now!</p>
    </header>

    <!-- Cart Items List -->
    <section class="cart-items" v-if="cart.length > 0">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-item-image" />
        <div class="cart-item-details">
          <h2 class="cart-item-name">{{ item.name }}</h2>
          <p class="cart-item-price">{{ formatPrice(item.price) }}</p>
          <button @click="removeFromCart(item.id)" class="remove-from-cart">Remove</button>
        </div>
      </div>
    </section>

    <!-- Total Price -->
    <section class="cart-total">
      <p>Total: {{ formatPrice(totalPrice) }}</p>
      <button @click="checkout" class="checkout-btn" :disabled="cart.length === 0">Proceed to Checkout</button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import gsap from 'gsap';

export default defineComponent({
  name: "Cart",
  setup() {
    // Inisialisasi cart menggunakan reactive untuk mengupdate state secara langsung
    const cart = reactive([
      { id: 1, name: "Fishing Rod", price: 49.99, image: "https://example.com/fishing-rod.jpg" },
      { id: 2, name: "Fishing Net", price: 24.99, image: "https://example.com/fishing-net.jpg" },
    ]);

    const formatPrice = (price: number) => {
      return `$${price.toFixed(2)}`;
    };

    // Menghitung total harga dari semua produk di cart
    const totalPrice = computed(() => {
      return cart.reduce((sum, item) => sum + item.price, 0);
    });

    // Fungsi untuk menghapus produk dari cart
    const removeFromCart = (productId: number) => {
      const index = cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        cart.splice(index, 1); // Hapus item dari array cart
      }
    };

    // Fungsi untuk checkout
    const checkout = () => {
      alert('Proceeding to checkout...');
      // Implementasikan logika checkout di sini
    };

    // GSAP Animations
    onMounted(() => {
      gsap.fromTo("#cart-page", 
        { opacity: 0, scale: 0.9 }, 
        { opacity: 1, scale: 1, duration: 2, ease: "back.out(1.7)" });

      gsap.fromTo(".cart-item", 
        { opacity: 0, scale: 0.8, rotationY: 180 }, 
        { opacity: 1, scale: 1, rotationY: 0, duration: 1.5, stagger: 0.2, ease: "power3.out" });

      gsap.fromTo(".checkout-btn", 
        { y: 50, opacity: 0, scale: 0.8 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "elastic.out(1, 0.75)" });

      gsap.fromTo(".cart-item-image", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1, ease: "power2.out" });

      gsap.to('.cart-items', {
        scrollTrigger: {
          trigger: '.cart-items',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
        rotationX: 10,
        rotationY: 10,
        z: -100,
        ease: "power2.out"
      });

      gsap.fromTo(".cart-item-name", 
        { x: -100, opacity: 0, rotationY: -45 }, 
        { x: 0, opacity: 1, rotationY: 0, duration: 1, ease: "back.out(1)" });

      gsap.fromTo(".cart-item-price", 
        { y: 20, opacity: 0, scale: 0.8 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" });
    });

    return {
      cart,
      formatPrice,
      totalPrice,
      removeFromCart,
      checkout
    };
  }
});
</script>

<style scoped>
#cart-page {
  padding: 20px;
  background-image: url('https://img.freepik.com/free-photo/nature-majesty-display-cliffs-waves-rock-generative-ai_188544-12584.jpg?t=st=1734640560~exp=1734644160~hmac=a5f2ae112a7a996c3c8f041f5a1ece227357d99fe3e29f5a0f6595e1a0725381&w=1060');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
  background-repeat: no-repeat;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  animation: fadeIn 2s ease-in-out; /* Animasi fade-in */
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.cart-items {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  animation: slideIn 1s ease-in-out;
}

@keyframes slideIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6); /* Transparansi untuk memberi kesan laut */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  perspective: 1000px;
  transform-style: preserve-3d; /* Menjaga efek 3D */
}

.cart-item:hover {
  transform: rotateY(15deg) scale(1.05); /* Efek rotasi 3D dan zoom saat hover */
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.cart-item-details {
  display: flex;
  flex-direction: column;
}

.cart-item-name {
  font-weight: bold;
  font-size: 18px;
}

.cart-item-price {
  color: #ff9f00; /* Warna oranye untuk memberi kesan kehangatan */
  font-size: 16px;
}

.remove-from-cart {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.remove-from-cart:hover {
  background-color: #c0392b; /* Warna lebih gelap saat hover */
}

.cart-total {
  margin-top: 20px;
  font-weight: bold;
  font-size: 22px;
  color: #ff9f00;
}

.checkout-btn {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.checkout-btn:hover {
  transform: scale(1.1);
  background-color: #2ecc71;
}

.checkout-btn:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.cart-item-name, .cart-item-price {
  transition: transform 0.3s ease;
}
</style>
