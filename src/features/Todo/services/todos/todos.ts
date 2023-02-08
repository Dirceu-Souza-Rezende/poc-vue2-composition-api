import client from "@/configurations/services/todos";
import { Todo } from "@/features/Todo/types";
import { IAPIResponse } from "@farm-investimentos/front-mfe-libs-ts";

export const addTodo = async (todo: Todo): Promise<IAPIResponse<any>> => {
  return client.post(`http://localhost:3000/todos`, todo);
};

export const removeTodo = async (id: string): Promise<IAPIResponse<any>> => {
  return client.delete(`http://localhost:3000/todos/${id}`);
};

export const getTodos = async (): Promise<IAPIResponse<any>> => {
  return client.get(`http://localhost:3000/todos`);
};
