import { mapGetters } from "vuex";

export default (module: string, key: string) => {
  const getters = mapGetters(module, {
    [key]: key,
  });
  return getters[key];
};
