<template>
    <button @click="handleClick" class="btn">
      <slot></slot>
    </button>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Button',
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
  </script>
  
  <style scoped>
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  