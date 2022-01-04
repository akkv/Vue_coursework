<template>
  <section class="cart">
    <table class="cart__table">
      <thead>
        <tr>
          <th>№</th>
          <th>Название</th>
          <th>Стоимость</th>
          <th>Количество</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in goods" :key="item.id">
          <td>1</td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="count">
              <button @click="this.removeFromCart(item)">-</button>
              {{ this.$store.state.cart[item.id] }}
              <button v-if="item.count !== 0" @click="this.addToCart(item)">
                +
              </button>
            </div>
          </td>
          <td>{{ item.price * this.$store.state.cart[item.id] }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5">
            Итоговая стоимость:{{ this.$store.getters.finalPrice }}
          </td>
        </tr>
      </tfoot>
    </table>
  </section>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    goods() {
      return this.$store.getters.goodsInCart;
    },
  },
  methods: {
    ...mapMutations(["addToCart", "removeFromCart"]),
  },
};
</script>
<style scoped>
.cart__table {
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}
td {
  text-align: center;
}
.count {
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  text-align: left;
}
</style>