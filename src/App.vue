<template>
  <nav class="nav">
    <router-link class="link nav__link" to="/catalog">Товары</router-link>
    <router-link class="link nav__link" to="/cart">Корзина: {{ this.$store.getters.cartCount }}
    </router-link>
  </nav>
  <router-view />
</template>
<style>
.nav {
  text-align: center;
  margin-bottom: 15px;
}
.link {
  text-decoration: none;
  color: #212121;
}
.link:hover {
  color: #424242;
}
.nav__link {
  font-size: 1.5rem;
  padding: 0 10px;
}
</style>