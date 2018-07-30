import { combineReducers } from "redux";
import submissionsReducer from "reducers/submissions";

export default combineReducers({
  submissions: submissionsReducer,
});
