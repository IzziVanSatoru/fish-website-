<template>
    <div class="product-card">
      <img :src="product.image" alt="Product image" />
      <h3>{{ product.name }}</h3>
      <p>{{ formatCurrency(product.price) }}</p>
      <Button @click="addToCart">Add to Cart</Button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import Button from '../components/Button.vue'
  
  export default defineComponent({
    name: 'ProductCard',
    components: { Button },
    props: {
      product: {
        type: Object as PropType<{ id: number; name: string; price: number; image: string }>,
        required: true
      }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.product)
      },
      // Menambahkan method untuk format mata uang
      formatCurrency(value: number) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value)
      }
    }
  })
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px;
    text-align: center;
  }
  
  .product-card img {
    max-width: 100%;
    height: auto;
  }
  
  .product-card h3 {
    font-size: 1.2em;
  }
  
  .product-card p {
    font-size: 1.1em;
    color: #333;
  }
  </style>
