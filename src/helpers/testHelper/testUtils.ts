import Vue from "vue";

function withSetup(composable: Function) {
  let result;
  const app = new Vue({
    setup() {
      result = composable();
      // suppress missing template warning
      return () => {};
    },
  });
  app.$mount(document.createElement("div"));
  // return the result and the app instance
  // for testing provide / unmount
  return [result, app];
}

export default withSetup;
