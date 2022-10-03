import { shallowMount, Wrapper } from "@vue/test-utils";
import Todos from ".";

describe("Todos", () => {
  let wrapper: Wrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(Todos);
  });

  it("should render", () => {
    expect(wrapper).toBeDefined();
  });
});
