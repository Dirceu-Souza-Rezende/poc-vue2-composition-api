<template>
  <div class="todo">
    <div class="todo__data">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <button class="todo__button" type="button" @click="emit('delete', id)">concluir</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  emits: ["delete"],
  setup(_, { emit }) {
    return { emit };
  },
});
</script>
<style scoped lang="scss">
@import "Todo";
</style>
