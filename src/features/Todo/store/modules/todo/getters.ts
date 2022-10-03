import { gettersBuilder } from "@farm-investimentos/front-mfe-libs/helpers/store";
import requestStatusKeys from "./_requestStatusKeys";
import basicKeys from "./_basicKeys";
import { State } from "./types";

export default {
  ...gettersBuilder(basicKeys),
  ...gettersBuilder(requestStatusKeys),
  todos(state: State) {
    if (!state.todos) return [];
    return state.todos;
  },
};
