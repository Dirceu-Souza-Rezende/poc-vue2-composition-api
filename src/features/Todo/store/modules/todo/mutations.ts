import { mutationsBuilder } from "@farm-investimentos/front-mfe-libs/helpers/store";
import basicKeys from "./_basicKeys";
import requestStatusKeys from "./_requestStatusKeys";

export default {
  ...mutationsBuilder([...basicKeys]),
  ...mutationsBuilder(requestStatusKeys),
};
