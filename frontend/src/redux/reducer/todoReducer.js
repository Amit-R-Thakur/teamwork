import * as todo from "../constant/todoConstant";
const initialState = {
  loading: false,
  todo: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todo.TODO_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case todo.TODO_SUCCESS:
      return {
        ...state,
        loading: false
      };
      case todo.TODO_ADD:
          return{
              ...state,
              todo:action.payload
          }
      default:
          return state
  }
};
