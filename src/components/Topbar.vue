<template>
  <div class="topbar">
    <div class="logo text-xl font-bold">My Website</div>
    <ul class="menu flex space-x-4">
      <li>
        <router-link to="/" class="text-gray-800 hover:text-gray-600">Home</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.topbar {
  background-color: #a57c7c;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #4bb8d9;
  font-size: 50px;
}

.menu {
  font-size: 20px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
