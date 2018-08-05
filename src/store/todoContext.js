import React from 'react';

const todos = {
  busy: [],
  easy: [],
};
const TodoContext = React.createContext(todos);
export default TodoContext;
