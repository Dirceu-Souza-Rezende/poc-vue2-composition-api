import store from "@/store";

export default function () {
  return dispatch;
}

function dispatch<T>(module: string, action: string, payload?: T) {
  store.dispatch(`${module}/${action}`, payload);
}
