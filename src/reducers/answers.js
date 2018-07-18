import { SUBMIT_ANSWER } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SUBMIT_ANSWER:
      return [...state, action.payload];
    default:
      return state;
  }
}
