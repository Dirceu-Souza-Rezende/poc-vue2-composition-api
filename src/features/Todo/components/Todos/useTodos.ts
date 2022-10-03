import useStore from "@/composables/useStore";
import { Todo } from "@/types";
import RequestStatusEnum from "@farm-investimentos/front-mfe-libs/consts/RequestStatusEnum";

import { computed, ComputedRef, watch } from "vue";

export type useTodosResponse = {
  newTodo: (name: string, description: string) => void;
  todos: ComputedRef<Array<Todo>>;
  addTodoRequestStatus: ComputedRef<boolean>;
  removeTodoRequestStatus: ComputedRef<boolean>;
  fetchTodos: () => void;
  deleteTodo: (id: string) => void;
};

export const useTodos = (): useTodosResponse => {
  const store = useStore();

  const newTodo = (name: string, description: string): void => {
    store.dispatch("todoModule/addTodo", { name, description });
  };

  const deleteTodo = (id: string): void => {
    store.dispatch("todoModule/removeTodo", id);
  };

  const fetchTodos = (): void => {
    store.dispatch("todoModule/fetchTodos");
  };

  const todos = computed<Todo[]>(() => {
    return store.getters["todoModule/todos"];
  });

  const addTodoRequestStatus = computed<typeof RequestStatusEnum>(() => {
    return store.getters["todoModule/addTodoRequestStatus"];
  });

  const removeTodoRequestStatus = computed<typeof RequestStatusEnum>(() => {
    return store.getters["todoModule/removeTodoRequestStatus"];
  });

  watch(addTodoRequestStatus, (newValue) => {
    if (newValue === RequestStatusEnum.SUCCESS) {
      store.dispatch("todoModule/fetchTodos");
    }
  });
  watch(removeTodoRequestStatus, (newValue) => {
    if (newValue === RequestStatusEnum.SUCCESS) {
      store.dispatch("todoModule/fetchTodos");
    }
  });

  return { newTodo, todos, fetchTodos, deleteTodo, addTodoRequestStatus, removeTodoRequestStatus };
};
