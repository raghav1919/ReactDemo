import { ADD_ARTICLE } from "../constants/action-types";
import { SAVE_USER } from "../constants/action-types";
import { combineReducers  } from "redux";

const initialState = {
  articles: []
};
function articlerootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

const userinitialState = {
  users: []
};
function userrootReducer(state = userinitialState, action) {
  if (action.type === SAVE_USER) {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload)
    });
  }
  return state;
}

const rootReducer = combineReducers({
  articlerootReducer,
  userrootReducer
})
export default rootReducer;