<template>
  <div class="product-details">
    <div class="product-image">
      <img :src="product.image" alt="Product image" />
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-price">${{ product.price }}</p>
      <p class="product-description">{{ product.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.product-details {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.product-image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-info {
  margin-top: 20px;
  text-align: center;
}

.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  font-size: 18px;
  margin-bottom: 10px;
  color: #535bf2;
}

.product-description {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const product = ref({});

onMounted(async () => {
  const res = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
  product.value = await res.json();
});
</script>


