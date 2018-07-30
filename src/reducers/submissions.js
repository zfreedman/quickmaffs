import { ADD_SUBMISSION } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_SUBMISSION:
      return [...state, action.payload]
    default:
      return state;
  }
}
