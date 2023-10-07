<template>
  <div id="app" class="flex h-screen">
    <div class="w-5/6">
      <div class="bg-gray-100 topbar">
        <Topbar />
      </div>
      <div class="p-4 container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Topbar from './components/Topbar.vue'
</script>

<style scoped>
#app {
  overflow: hidden;
}

.topbar {
  height: 60px;
}

.container {
  margin: 20px;
}
</style>
