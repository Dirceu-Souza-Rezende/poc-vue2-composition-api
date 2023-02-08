import { useGetter, useDispatch, useStore } from "@/composables";
import { Todo } from "@/features/Todo/types";
import { ComposibleReturn } from "@/types";
import RequestStatusEnum from "@farm-investimentos/front-mfe-libs/consts/RequestStatusEnum";

import { computed, ComputedRef, Ref, ref, watch } from "vue";

export type States = {
  name: Ref<string>;
  description: Ref<string>;
  todos: ComputedRef<Array<Todo>>;
  addTodoRequestStatus: ComputedRef<boolean>;
  removeTodoRequestStatus: ComputedRef<boolean>;
};

export type Events = {
  newTodo: (name: string, description: string) => void;
  fetchTodos: () => void;
  deleteTodo: (id: string) => void;
};

export const useTodos = (): ComposibleReturn<States, Events> => {
  const dispatch = useDispatch();
  const name = ref<string>("");
  const description = ref<string>("");

  const newTodo = (name: string, description: string): void => {
    dispatch<{ name: string; description: string }>("todoModule", "addTodo", { name, description });
  };

  const deleteTodo = (id: string): void => {
    dispatch("todoModule", "removeTodo", id);
  };

  const fetchTodos = (): void => {
    dispatch("todoModule", "fetchTodos");
  };

  const todos = computed<Todo[]>(useGetter("todoModule", "todos"));

  const addTodoRequestStatus = computed<typeof RequestStatusEnum>(
    useGetter("todoModule", "addTodoRequestStatus")
  );

  const removeTodoRequestStatus = computed<typeof RequestStatusEnum>(
    useGetter("todoModule", "removeTodoRequestStatus")
  );

  watch(addTodoRequestStatus, (newValue) => {
    if (newValue === RequestStatusEnum.SUCCESS) {
      dispatch("todoModule", "fetchTodos");
    }
  });
  watch(removeTodoRequestStatus, (newValue) => {
    if (newValue === RequestStatusEnum.SUCCESS) {
      dispatch("todoModule", "fetchTodos");
    }
  });

  return {
    states: { name, description, todos, addTodoRequestStatus, removeTodoRequestStatus },
    events: { newTodo, fetchTodos, deleteTodo },
  };
};
