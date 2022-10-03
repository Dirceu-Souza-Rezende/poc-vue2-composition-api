import { shallowMount, Wrapper } from "@vue/test-utils";
import Todo from ".";

describe("Todo", () => {
  let wrapper: Wrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      propsData: {
        id: "esasdfgh",
        title: "test",
        description: "description test",
      },
    });
  });

  it("should render", () => {
    expect(wrapper).toBeDefined();
  });
});
