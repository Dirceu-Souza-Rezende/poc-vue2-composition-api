import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import Vuex from "vuex";
import useStore from "@/composables/useStore";

import Todos from ".";

const localVue = createLocalVue();
localVue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    todoModule: {
      namespaced: true,
      actions: {
        fetchTodos: () => {},
        addTodo: () => {},
        removeTodo: () => {},
      },
      getters: {
        todos: () => [{ description: "desc", id: "test", name: "First TODO" }],
        todosRequestStatus: () => "IDLE",
        addTodoRequestStatus: () => "IDLE",
        removeTodoRequestStatus: () => "IDLE",
      },
    },
  },
});

describe("Todos", () => {
  let wrapper: Wrapper<any>;
  let component: Record<string, any>;

  beforeEach(() => {
    wrapper = shallowMount(Todos, {
      localVue,
      store,
    });

    component = wrapper.vm;
  });

  it("should render", () => {
    console.log(wrapper.vm);
    expect(wrapper).toBeDefined();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Methods", () => {
    describe("fetchTodos", () => {
      it("should call fetchTodos action", () => {
        const store = useStore();

        component.fetchTodos();
        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toEqual([
          ["newCredit/fetchClientHistory", { clientId: 1 }],
          ["newCredit/fetchClientHistoryLogs", { clientId: 1 }],
        ]);
      });
    });

    describe("newTodo", () => {
      it("should call fetchTodos action", () => {
        const store = useStore();

        component.newTodo("test", "description test");

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toEqual([
          ["newCredit/fetchClientHistory", { clientId: 1 }],
          ["newCredit/fetchClientHistoryLogs", { clientId: 1 }],
        ]);
      });
    });

    describe("removeTodoRequestStatus", () => {
      it("should call fetchTodos action", () => {
        const store = useStore();

        component.deleteTodo("1");

        expect(store.dispatch).toHaveBeenCalledTimes(2);
        expect(store.dispatch).toEqual([
          ["newCredit/fetchClientHistory", { clientId: 1 }],
          ["newCredit/fetchClientHistoryLogs", { clientId: 1 }],
        ]);
      });
    });
  });

  describe("Computed", () => {
    describe("todos", () => {
      it("should return todos", () => {
        expect(component.name).toBe("true");
      });
    });
    describe("addTodoRequestStatus", () => {
      it("should return the status from addTodoRequestStatus", () => {
        expect(component.addTodoRequestStatus).toBe("IDLE");
      });
    });

    describe("removeTodoRequestStatus", () => {
      it("should return the status from removeTodoRequestStatus", () => {
        expect(component.removeTodoRequestStatus).toBe("IDLE");
      });
    });
  });

  describe("Watch", () => {
    describe("addTodoRequestStatus", () => {
      expect(1).toBe(1);
    });
  });
});
