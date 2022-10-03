<template>
  <div class="todos">
    <h1>Todos</h1>
    <div>
      <form class="todos__form" @submit.prevent="newTodo(name, description)">
        <label class="todos__label" for="todo-name">
          <span>Name</span>
          <input id="todo-name" type="text" v-model="name" />
        </label>
        <label class="todos__label" for="todo-desc">
          <span>Description</span>
          <input id="todo-desc" type="text" v-model="description" />
        </label>

        <button class="todos__button" type="submit">Add Task</button>
      </form>
      <ul class="todos__list">
        <li class="todos__item" v-for="todo in todos" :key="todo.id">
          <Todo
            :id="todo.id"
            :title="todo.name"
            :description="todo.description"
            @delete="deleteTodo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useTodos } from "./useTodos";
import Todo from "../Todo";

export default defineComponent({
  components: {
    Todo,
  },

  setup() {
    const name = ref<string>("");
    const description = ref<string>("");
    const { newTodo, todos, fetchTodos, deleteTodo } = useTodos();

    onMounted(() => {
      fetchTodos();
    });
    return {
      name,
      description,
      todos,
      newTodo,
      deleteTodo,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todos {
  &__form,
  &__label {
    display: flex;
    flex-direction: column;
  }

  &__form {
    align-items: center;
    gap: 1rem;
  }

  &__list {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    gap: 0.75rem;
  }

  &__item {
    display: flex;
    justify-content: center;
  }

  &__button {
    background-color: #42b983;
    border: none;
    border-radius: 0.25rem;
    color: #f1f1f1;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.7rem;
    transition: all 0.4s;

    &:hover {
      background-color: #2d805b;
    }
  }

  &__label {
    & span {
      margin-right: auto;
      margin-bottom: 0.5rem;
    }

    & input {
      border: 1px solid #010101;
      border-radius: 0.25rem;
      padding: 0.3rem;
    }
  }

  &__label,
  &__button {
    width: 30rem;
  }
}
</style>
