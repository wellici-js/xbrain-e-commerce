import { ActionUser } from '../../models';

const State = {
  name: "",
  email: ""
}

const user = (state = State, action: ActionUser) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default user;