import { combineReducers } from "redux";
import answersReducer from "reducers/answers";

export default combineReducers({
  answers: answersReducer
});
