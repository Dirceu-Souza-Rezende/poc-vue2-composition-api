import VueRouter from "vue-router";
import useRouter from ".";

describe("useRouter", () => {
  it("should returnn an instance of VueRouter", () => {
    const router = useRouter();
    expect(router).toBeInstanceOf(VueRouter);
  });
});
