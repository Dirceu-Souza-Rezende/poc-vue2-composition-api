import todoStoreMock from "../../mocks/storeMock";
import { useTodos, useTodosResponse } from "./useTodos";

jest.mock("@/store", () => {
  return todoStoreMock;
});

describe("useTodos", () => {
  let values: useTodosResponse;
  it("should be defined", () => {
    expect(useTodos).toBeDefined();
  });

  beforeEach(() => {
    values = useTodos();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Methods", () => {
    describe("fetchTodos", () => {
      it("should call fetchTodos action", () => {
        values.fetchTodos();
        expect(todoStoreMock.dispatch).toHaveBeenCalled();
        expect(todoStoreMock.dispatch).toHaveBeenCalledWith("todoModule/fetchTodos");
      });
    });

    describe("newTodo", () => {
      it("should call fetchTodos action", () => {
        values.newTodo("test", "description test");
        expect(todoStoreMock.dispatch).toHaveBeenCalled();
        expect(todoStoreMock.dispatch).toHaveBeenCalledWith("todoModule/addTodo", {
          description: "description test",
          name: "test",
        });
      });
    });

    describe("removeTodoRequestStatus", () => {
      it("should call fetchTodos action", () => {
        values.deleteTodo("1");
        expect(todoStoreMock.dispatch).toHaveBeenCalled();
        expect(todoStoreMock.dispatch).toHaveBeenCalledWith("todoModule/removeTodo", "1");
      });
    });
  });

  describe("Computed", () => {
    describe("todos", () => {
      it("should return todos", () => {
        expect(values.todos.value).toEqual([]);
      });
    });
    describe("addTodoRequestStatus", () => {
      it("should return the status from addTodoRequestStatus", () => {
        expect(values.addTodoRequestStatus.value).toBe("IDLE");
      });
    });

    describe("removeTodoRequestStatus", () => {
      it("should return the status from removeTodoRequestStatus", () => {
        expect(values.removeTodoRequestStatus.value).toBe("IDLE");
      });
    });
  });

  describe("Watch", () => {
    describe("addTodoRequestStatus", () => {
      it("should watch todoModule/addTodoRequestStatus", () => {
        todoStoreMock.getters["todoModule/addTodoRequestStatus"] = () => "SUCCESS";

        expect(todoStoreMock.dispatch).toHaveBeenCalled();
        expect(todoStoreMock.dispatch).toHaveBeenCalledWith("todoModule/fetchTodos");
      });
    });
  });
});
