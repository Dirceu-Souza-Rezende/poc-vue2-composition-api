const todoStoreMock = {
  getters: {
    "todoModule/todos": jest.fn().mockImplementation(() => {
      return [];
    })(),
    "todoModule/addTodoRequestStatus": jest.fn().mockImplementation(() => {
      return "IDLE";
    })(),
    "todoModule/removeTodoRequestStatus": jest.fn().mockImplementation(() => {
      return "IDLE";
    })(),
  },
  actions: {
    "todoModule/addTodo": jest.fn(),
    "todoModule/deleteTodo": jest.fn(),
    "todoModule/fetchTodos": jest.fn(),
  },
  dispatch: jest.fn(),
};

export default todoStoreMock;
