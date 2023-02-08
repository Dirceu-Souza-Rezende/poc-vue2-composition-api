<template>
  <div class="todos">
    <h1>Todos</h1>
    <div>
      <form
        class="todos__form"
        @submit.prevent="events.newTodo(states.name.value, states.description.value)"
      >
        <label class="todos__label" for="todo-name">
          <span>Name</span>
          <input id="todo-name" type="text" v-model="states.name.value" />
        </label>
        <label class="todos__label" for="todo-desc">
          <span>Description</span>
          <input id="todo-desc" type="text" v-model="states.description.value" />
        </label>

        <button class="todos__button" type="submit">Add Task</button>
      </form>
      <ul class="todos__list">
        <li class="todos__item" v-for="todo in states.todos.value" :key="todo.id">
          <Todo
            :id="todo.id"
            :title="todo.name"
            :description="todo.description"
            @delete="events.deleteTodo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useTodos } from "./useTodos";
import Todo from "../Todo";

export default defineComponent({
  components: {
    Todo,
  },

  setup() {
    const { events, states } = useTodos();

    onMounted(() => {
      events.fetchTodos();
    });
    return {
      events,
      states,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "Todos";
</style>
