import useRoute from ".";

describe("useRoute", () => {
  it("should returnn an instance of Route", () => {
    const route = useRoute();
    expect(route).toEqual({
      fullPath: "/",
      hash: "",
      matched: [],
      meta: {},
      name: null,
      params: {},
      path: "/",
      query: {},
    });
  });
});
