<template>
  <div class="container mx-auto">
    <table class="table-auto w-full border-collapse">
      <thead>
      <tr>
        <th class="border px-4 py-2" width="40%">Title</th>
        <th class="border px-4 py-2">Unit Price</th>
        <th class="border px-4 py-2">Category</th>
        <th class="border px-4 py-2">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in paginatedProducts" :key="product.id">
        <td class="border px-4 py-2">{{ product.title }}</td>
        <td class="border px-4 py-2">${{ product.price }}</td>
        <td class="border px-4 py-2">{{ product.category }}</td>
        <td class="border px-4 py-2">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="() => viewDetails(product)">View Details</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="flex justify-between mt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import router from "../router/index.js";

const products = ref([]);
const currentPage = ref(1);
const itemsPerPage = 5;

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return products.value.slice(start, start + itemsPerPage);
});

const viewDetails = (product) => {
  router.push({ name: 'ProductDetails', params: { id: product.id } });
};


const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

onMounted(async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const json = await res.json();
  products.value = json.map((product) => ({
    ...product,
    numberOfItems: 0,
  }));
});
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
