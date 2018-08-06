import { combineReducers } from 'redux';

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

const todoReducer = createReducer([], {
  LOAD_TODO: (state, action) => state,
});

export default combineReducers({
  todo: todoReducer,
});
