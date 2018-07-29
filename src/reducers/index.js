import { combineReducers } from "redux";
import answersReducer from "reducers/answers";
import expressionsReducer from "reducers/expressions";

export default combineReducers({
  answers: answersReducer,
  expressions: expressionsReducer,
});
