import api from '../apiSingleton';

export const LOAD_CHI_TODO_SUCCESS = 'LOAD_CHI_TODO_SUCCESS';
export function loadChiTodos() {
  return dispatch =>
    dispatch({
      type: LOAD_CHI_TODO_SUCCESS,
    });
  api.todos.chi().then((response) => {
    // const { todos } = response;
    dispatch({
      type: LOAD_CHI_TODO_SUCCESS,
      payload: [],
    });
  });
}
