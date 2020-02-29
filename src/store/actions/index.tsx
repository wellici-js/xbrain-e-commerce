let nextTodoId = 0;
export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  payload: {
    text,
    id: nextTodoId++
  }
})