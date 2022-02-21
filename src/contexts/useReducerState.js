const useReducerState = (state, action) => {

  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.payload
    }
  }

  if (action.type === "SET_TOKEN") {
    return {
      ...state,
      token: action.payload
    }
  }

  return state;
};

export default useReducerState;
