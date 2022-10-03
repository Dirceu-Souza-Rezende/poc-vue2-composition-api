import Vue from "vue";
import Vuex from "vuex";
import { todoModule } from "@/features/Todo/store";
Vue.use(Vuex);

export type RootStoreType = {
  modules: {
    todoModule: string;
  };
};

const store = new Vuex.Store<RootStoreType>({
  modules: {
    todoModule,
  },
});
export default store;
