interface Action {
  type: string;
  payload: {
    id: number;
    text: string;
  }
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text
        }
      ]
    default:
      return state;
  }
}

export default todos;