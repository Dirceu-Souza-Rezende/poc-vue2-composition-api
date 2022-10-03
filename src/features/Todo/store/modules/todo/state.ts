import {
  buildStateRequestStatus,
  buildBasicState,
} from "@farm-investimentos/front-mfe-libs/helpers/store";
import requestStatusKeys from "./_requestStatusKeys";
import basicKeys from "./_basicKeys";

export default {
  ...buildBasicState(basicKeys),
  ...buildStateRequestStatus(requestStatusKeys),
};
