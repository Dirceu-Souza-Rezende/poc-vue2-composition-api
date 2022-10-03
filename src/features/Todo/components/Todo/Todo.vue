<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

export type TodoProps = {
  id: string;
  title: string;
  description?: string;
};

export type TodoEmits = {
  (event: "delete", id: string): void;
};

defineProps<TodoProps>();
const emit = defineEmits<TodoEmits>();
</script>
<template>
  <div class="todo">
    <div class="todo__data">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <button class="todo__button" type="button" @click="emit('delete', id)">concluir</button>
  </div>
</template>
<style scoped lang="scss">
.todo {
  color: #f1f1f1;
  background-color: #42b983;
  border-radius: 1rem;
  display: flex;
  width: 50%;
  padding: 0 1rem;

  &__data {
    flex: 1;
  }

  &__button {
    align-self: center;
    background-color: #fff;
    border: 2px #0f0f0f solid;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0.5rem;
    transition: border-color 1s, color 0.4s, background-color 0.4s;

    &:hover {
      background-color: #0e0e0e;
      color: #f1f1f1;
    }
  }
}
</style>
