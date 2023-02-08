/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import RequestStatusEnum from "@farm-investimentos/front-mfe-libs/consts/RequestStatusEnum";
import errorBuilder from "@farm-investimentos/front-mfe-libs/helpers/errorBuilder";
import { getTodos } from "@/features/Todo/services/todos";
import { fetchDefaultParser } from "@farm-investimentos/front-mfe-libs/helpers/store";
import { Commit } from "vuex";
import { addTodo, removeTodo } from "../../../services/todos";
import { Todo } from "@/features/Todo/types";

export default {
  async fetchTodos({ commit }: { commit: Commit }): Promise<void> {
    commit("setTodosRequestStatus", RequestStatusEnum.START);

    try {
      const { data } = await getTodos();

      fetchDefaultParser(commit, data, null, "Todos");
    } catch (error) {
      commit("setTodosRequestStatus", errorBuilder(error));
    }
  },
  async addTodo({ commit }: { commit: Commit }, todo: Todo): Promise<void> {
    commit("setAddTodoRequestStatus", RequestStatusEnum.START);

    try {
      await addTodo(todo);

      commit("setAddTodoRequestStatus", RequestStatusEnum.SUCCESS);
    } catch (error) {
      commit("setAddTodoRequestStatus", errorBuilder(error));
    }
  },

  async removeTodo({ commit }: { commit: Commit }, id: string): Promise<void> {
    commit("setRemoveTodoRequestStatus", RequestStatusEnum.START);

    try {
      await removeTodo(id);
      commit("setRemoveTodoRequestStatus", RequestStatusEnum.SUCCESS);
    } catch (error) {
      commit("setRemoveTodoRequestStatus", errorBuilder(error));
    }
  },
};
