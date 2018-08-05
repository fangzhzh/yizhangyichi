import ApiClient from './ApiClient';
import TodoApi from './TodoApi';


export default function () {
  const api = new ApiClient();
  return {
    apiClient: api,
    todos: new TodoApi({ apiClient: api }),
  };
}
