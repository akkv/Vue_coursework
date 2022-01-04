<template>
  <div class="card">
    <h2 class="card__title">{{ card.title }}</h2>
    <img
      :src="require('@/assets/' + card.image)"
      alt="card.title"
      class="card__image"
    />
    <div class="card__wrap">
      <span> Стоимость: {{ card.price }} </span><br /><br />
      <span v-if="card.count > 0"> Количество: {{ card.count }} </span>
      <span v-else> Товар закончился </span>
      <p class="card__text">
        {{ card.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card: null,
    };
  },
  created() {
    this.$store.state.goods.forEach((elem) => {
      if (elem.id === +this.$route.params.id) {
        this.card = elem;
      }
    });
  },
};
</script>
<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 10px;
}
.card__title {
  width: 100%
}
.card__image {
  width: 300px; 
  object-fit: cover;
}
.card__wrap {
  text-align: left;
  width: 50%;
}
</style>