<template>
  <section class="catalog">
    <card v-for="good in goods" :card="good" :key="good.id"></card>
  </section>
</template>

<script>
import Card from "@/components/Card";
export default {
  components: { Card },
  computed: {
    goods() {
      return this.$store.state.goods;
    },
  },
};
</script>

<style>
.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>