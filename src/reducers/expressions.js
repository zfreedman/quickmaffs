import { ADD_EXPRESSION } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_EXPRESSION:
      return [...state, action.payload];
    default:
      return state;
  }
}
