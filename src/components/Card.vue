<template>
  <div class="card">
    <h2 class="card__title">{{ card.title }}</h2>
    <img
      :src="require('@/assets/' + card.image)"
      alt="card.title"
      class="card__image"
    /><br />
    <p class="card__text">
      {{ card.description.split(" ").slice(0, 14).join(" ") }}

      <router-link class="link card__link" :to="'/catalog/' + card.id"
        >...подробнее</router-link
      >
    </p>
    <span> Стоимость: {{ card.price }} </span>
    <span v-if="card.count > 0"> Количество: {{ card.count }} </span>
    <span v-else> Товар закончился </span>
    <br />
    <div>
      <button v-if="card.count !== 0" @click="this.addToCart(card)">
        В корзину
      </button>
      <span v-if="this.$store.state.cart[card.id]">
        <span class="count">{{ this.$store.state.cart[card.id] }}</span>
        <button @click="this.removeFromCart(card)">Удалить</button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    card: Object,
  },
  methods: {
    ...mapMutations(["addToCart", "removeFromCart"]),
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  border: 1px solid black;
  padding: 10px;
}
.card__title {
  margin-top: 0;
}
.card__image {
  width: 50%;
  flex-grow: 1;
  object-fit: cover;
}
.card__text {
  padding: 0 15px;
  flex-basis: 80px;
  text-align: justify;
}
.card__link {
  font-weight: 600;
}
button {
  width: 100px;
}
.count {
  display: inline-block;
  font-weight: 700;
  width: 50px;
}
</style>