import { shallowMount, Wrapper } from "@vue/test-utils";
import Home from ".";

describe("Todos", () => {
  let wrapper: Wrapper<any>;
  beforeEach(() => {
    wrapper = shallowMount(Home);
  });

  it("should render", () => {
    expect(wrapper).toBeDefined();
  });
});
