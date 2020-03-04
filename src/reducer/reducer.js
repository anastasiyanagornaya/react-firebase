const initialState = {};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return { state: action.payload };
    case "UPDATE_USER_SUCCESS":
      return { state: action.payload };
    default:
      return state;
  }
}
