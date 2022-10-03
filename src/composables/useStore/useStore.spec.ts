import { Store } from "vuex";
import useStore from ".";

describe("useStore", () => {
  it("should returnn an instance of Store", () => {
    const router = useStore();
    expect(router).toBeInstanceOf(Store);
  });
});
